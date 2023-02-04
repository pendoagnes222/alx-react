import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('Checking Year', () => {
    expect(getFullYear()).toEqual(2022)
})

test('checking footerCopy when input true', () =>  {
    expect(getFooterCopy(true)).toEqual("Holberton School")

})

test('checking footerCopy when input false', () =>  {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard")

})

test('checking notificatiocatio', () =>  {
    expect(getLatestNotification(false)).toEqual("<strong>Urgent requirement</strong> - complete by EOD")

})