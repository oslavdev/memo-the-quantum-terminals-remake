import React from 'react'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Header2, Paragraph } from '@/UI/Text/Text'
import { Box } from '@/UI/Boxes/Box'
import { Terminal } from '@/UI/Terminals/Terminals'
import { pathTerminal } from '@/app/config/paths'
import { useNavigate } from 'react-router'

export default function Terminals() {
    const navigate = useNavigate()
    return (
        <LayoutMenu logo>
            <Header2>Terminals</Header2>
            <Box mt={10}>
                <Paragraph>Please choose game you want to play</Paragraph>
            </Box>
            <Box mt={20}>
            <Terminal onClick={()=>navigate(pathTerminal("memo"))}>
                Memo
            </Terminal>
            </Box>
        </LayoutMenu>
    )
}
