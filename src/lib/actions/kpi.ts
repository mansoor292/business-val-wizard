'use server'

import { kpiData, businessDrivers } from '../../components/kpi/data'
import { BusinessDriver, KPI } from '../data/interface'

// Cache mock data to maintain consistency between calls
let mockKPIs: KPI[] = []
let mockBusinessDrivers: BusinessDriver[] = []

// Helper function to add BaseEntity properties recursively
function addBaseEntityProps(kpi: any): KPI {
  const now = new Date()
  return {
    ...kpi,
    id: kpi.id || Math.random().toString(36).substring(7),
    createdAt: now,
    updatedAt: now,
    children: (kpi.children || []).map((child: any) => addBaseEntityProps(child))
  }
}

// Initialize mock data
function initializeMockData() {
  if (mockKPIs.length === 0) {
    mockKPIs = kpiData.map(kpi => addBaseEntityProps(kpi))
  }

  if (mockBusinessDrivers.length === 0) {
    mockBusinessDrivers = businessDrivers.map(driver => ({
      ...driver,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
  }
}

export async function getKPIs(): Promise<KPI[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockKPIs
}

export async function getBusinessDrivers(): Promise<BusinessDriver[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockBusinessDrivers
}

export async function getKPIById(id: string): Promise<KPI | null> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockKPIs.find(kpi => kpi.id === id) || null
}

export async function updateKPIProgress(id: string, current: number): Promise<KPI> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))

  const kpiIndex = mockKPIs.findIndex(kpi => kpi.id === id)
  if (kpiIndex === -1) {
    throw new Error(`KPI with id ${id} not found`)
  }

  mockKPIs[kpiIndex] = {
    ...mockKPIs[kpiIndex],
    current,
    updatedAt: new Date()
  }

  return mockKPIs[kpiIndex]
}

export async function getKPIsByLevel(level: string): Promise<KPI[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockKPIs.filter(kpi => kpi.level === level)
}

export async function getKPIChildren(parentId: string): Promise<KPI[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  
  const findChildren = (id: string): KPI[] => {
    const kpi = mockKPIs.find(k => k.id === id)
    if (!kpi || !kpi.children) return []
    
    return kpi.children.reduce((acc: KPI[], child: KPI) => {
      return [...acc, child, ...findChildren(child.id)]
    }, [])
  }

  return findChildren(parentId)
}
