import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import {Popover} from '@headlessui/react'

export function Widget() {
  
    return (
        <Popover className='absolute bottom-4 right-5'>
            <Popover.Panel>Hello World</Popover.Panel>

            <Popover.Button  className='bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className="w-6 h-6" weight={'thin'} />
                <span className='max-w-0 overflow-hidden group-hover:max-w-md transition-all duration-700 ease-linear'>Feedback</span>
            </Popover.Button>
        </Popover>
    )
}