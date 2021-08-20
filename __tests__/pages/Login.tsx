import React, { Suspense } from 'react'
import 'cross-fetch/polyfill'
import Login from '@/pages/Login'
import Mounter from '@/app/config/test/mount'
import { ME_QUERY, meQuery } from '@/app/graphql/user'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import wait from 'waait'

describe('Login page', () => {
  global.window = { location: { pathname: '/login' } } as any

  it('User is not authorized', async () => {
    const state = {}
    let dispatch = jest.fn()

    /** Mock Initial me request */
    const mocks = [
      {
        request: {
          query: meQuery,
        },
        result: {
          data: null,
        },
      },
    ]

    let wrapper
    await act(async () => {
      wrapper = mount(
        <Mounter mocks={mocks} state={state} dispatch={dispatch}>
          <Suspense fallback={<div>loading...</div>}>
            <Login />
          </Suspense>
        </Mounter>,
      )
    })

    await act(() => wait(0))
    expect(wrapper).toBeTruthy()
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('p').childAt(0).text()).toBe('Login')
  })
})
