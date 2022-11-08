import * as React from 'react'

import { Box } from '@/components/UI/box'
import { Button } from '@/components/UI/buttons/primary';
import { Header } from '@/components/UI/text';
import LayoutMenu from "@/components/layouts/layout-menu";

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
