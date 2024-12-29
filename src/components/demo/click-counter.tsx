'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { incrementClickCount } from '../../lib/api/clickCounter'

export function ClickCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const result = await incrementClickCount()
      setCount(result.count)
    } catch (error) {
      console.error('Failed to increment count:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button 
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Counting...' : 'Click Me!'}
      </Button>
      {count !== null && (
        <p className="text-lg">
          Total Clicks: <span className="font-bold">{count}</span>
        </p>
      )}
    </div>
  )
}
