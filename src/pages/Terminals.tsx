import React from 'react'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Header2, Paragraph } from '@/UI/Text/Text'
import { Box } from '@/UI/Boxes/Box'
import { Terminal } from '@/UI/Terminals/Terminals'
import { pathTerminal } from '@/app/config/paths'

export default function Terminals({
    history
}) {
    return (
        <LayoutMenu logo>
            <Header2>Terminals</Header2>
            <Box mt={10}>
                <Paragraph>Please choose game you want to play</Paragraph>
            </Box>
            <Box mt={20}>
            <Terminal onClick={()=>history.push(pathTerminal("memo"))}>
                Memo
            </Terminal>
            </Box>
        </LayoutMenu>
    )
}
