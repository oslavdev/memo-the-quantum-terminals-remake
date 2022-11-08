import * as React from 'react'
import * as UI from "@/components/UI"

import LazyImage from '@/components/lazy-image'

export default function LogoMinified() {
  const ref = React.createRef() as React.MutableRefObject<HTMLInputElement>
  const ref2 = React.createRef() as React.MutableRefObject<HTMLInputElement>

  React.useEffect(() => {
    const wrapper = document.querySelector('body') as HTMLBodyElement
    const layerOne = ref.current
    const layerTwo = ref2.current

    wrapper.addEventListener('mousemove', function (e: MouseEvent) {
      const pageX = e.clientX,
        pageY = e.clientY

      layerOne.style.transform =
        'translateX(' + pageX / 100 + '%) translateY(' + pageY / 100 + '%)'
      layerTwo.style.transform =
        'translateX(' + pageX / 150 + '%) translateY(' + pageY / 250 + '%)'

       wrapper.setAttribute('style', `background-position:'${pageX/200}px center`)
    })
  }, [])

  return (
    <UI.Box
      position="fixed"
      top="0%"
      left="8%"
      h="150px"
      id="logo"
      disp="flex"
      jc="center"
      ai="center"
    >
      <UI.Box ref={ref} position="absolute" w="150px" h="70px" mr={30}>
        <LazyImage src="/public/images/menu/Logo-1.png" alt="Logo" />
      </UI.Box>
      <UI.Box ref={ref2} position="absolute" w="150px" h="70px" mr={30}>
        <LazyImage src="/public/images/menu/Logo-2.png" alt="Logo" />
      </UI.Box>
    </UI.Box>
  )
}
