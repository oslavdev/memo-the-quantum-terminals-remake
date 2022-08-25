import React from 'react'
import LayoutMenu from "@/components/Layout/Layout_menu";
import { Box } from '@/UI/Boxes'
import { Header } from '@/UI/Text/Text';
import { Button } from '@/UI/Buttons/Primary';

export default function Wrong() {
    return (
        <LayoutMenu logo>
            <Box>
                <Header>Something went wrong</Header>
            </Box>
            <Box mt={30}>
                <Button onClick={() => location.reload()} text={"Try again"}/>
            </Box>
        </LayoutMenu>
    )
}
