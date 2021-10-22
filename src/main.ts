import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const gitRef: string = core.getInput('refs')
    const arr: string[] = gitRef.split('/')
    const refBranchName: string = arr[arr.length - 1]

    const baseRef: string = core.getInput('base_ref')
    const tag = baseRef ? baseRef : refBranchName

    const useMainCommon: boolean =
      tag === 'main' || tag === 'master' || tag === 'dev'

    let commonBranch = 'master'
    if (!useMainCommon) commonBranch = tag

    core.setOutput('useMainCommon', String(useMainCommon))
    core.setOutput('tag', tag)
    core.setOutput('commonBranch', commonBranch)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
