import React from 'react';
import { mount } from 'enzyme';
import { AlbumsListItemProps, AlbumsListItem } from '../AlbumListItem';
import { Link, BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../../../layout/theme/appTheme';

describe('AlbumListItem', () => {
  it('render component properly', () => {
    const testProps: AlbumsListItemProps = {
      album: {
        userId: 1,
        id: 20,
        title: 'test title',
      }
    }
    const wrapper = mount(
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <AlbumsListItem {...testProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(wrapper.find(AlbumsListItem).exists()).toBeTruthy();
  })
  it('component matches snapshot', () => {
    const testProps: AlbumsListItemProps = {
      album: {
        userId: 1,
        id: 20,
        title: 'test title',
      }
    }
    const wrapper = mount(
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <AlbumsListItem {...testProps} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('Link element is generated with proper redirect link', () => {
    const testProps: AlbumsListItemProps = {
      album: {
        userId: 1,
        id: 20,
        title: 'test title',
      }
    }
    const wrapper = mount(
      <ThemeProvider theme={appTheme}>
        <MemoryRouter>
          <AlbumsListItem {...testProps} />
        </MemoryRouter>
      </ThemeProvider>
    );
    
    expect(wrapper.find(Link).props().to).toEqual(`/album/${testProps.album.id}/${testProps.album.userId}`);
  })
})