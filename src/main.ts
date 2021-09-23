import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const gitRef: string = core.getInput('refs')
    const arr: string[] = gitRef.split('/')
    const branchName: string = arr[arr.length - 1]
    core.setOutput('tag', branchName)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
