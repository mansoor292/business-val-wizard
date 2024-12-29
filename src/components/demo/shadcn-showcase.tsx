'use client'

import { Button } from '../ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

export function ShadcnShowcase() {
  return (
    <div className='flex flex-col items-center space-y-6 p-6'>
      <h2 className='text-2xl font-bold mb-4'>Shadcn UI Showcase</h2>
      
      <div className='flex space-x-4'>
        <Button variant='default'>Default Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
        <Button variant='outline'>Outline Button</Button>
        <Button variant='destructive'>Destructive Button</Button>
      </div>

      <Carousel className='w-full max-w-xs'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <div className='flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-xl'>
                  <span className='text-4xl font-semibold'>Item {index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
