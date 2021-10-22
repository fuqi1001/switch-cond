import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const mainSet = new Set()
    mainSet.add('main')
    mainSet.add('master')
    mainSet.add('dev')

    const gitRef: string = core.getInput('refs')
    const arr: string[] = gitRef.split('/')
    const refBranchName: string = arr[arr.length - 1]

    const baseRef: string = core.getInput('base_ref')
    const tag = baseRef ? baseRef : refBranchName

    const isMainVar: string = core.getInput('isMain')
    const isMain: boolean = isMainVar === 'true'
    const useMainCommon: boolean = mainSet.has(tag)
    const commonBranch: string = isMain || useMainCommon ? 'master' : tag

    core.setOutput('tag', tag)
    core.setOutput('commonBranch', commonBranch)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
