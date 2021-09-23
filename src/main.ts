import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const gitRef: string = core.getInput('refs')
    const arr: string[] = gitRef.split('/')
    const refBranchName: string = arr[arr.length - 1]

    const baseRef: string = core.getInput('base_ref')
    const baseRefArr: string[] = baseRef.split('/')
    const baseName: string = baseRefArr[baseRefArr.length - 1]

    const headRef: string = core.getInput('head_ref')
    const headRefArr: string[] = headRef.split('/')
    const headName: string = headRefArr[headRefArr.length - 1]

    core.setOutput('tag', refBranchName)
    core.setOutput('base', baseName)
    core.setOutput('head', headName)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
