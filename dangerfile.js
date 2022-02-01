// Import the feedback functions
import { message, warn, fail, markdown } from "danger"

/**
 * Setup
 */
const pr = danger.github.pr
const created_files = danger.git.created_files
const danger_commits = danger.git.commits


/** No ENV files */
const env_files = created_files.find((file) => 
	file.startsWith('.env')
)
if(env_files){
    fail(
        `This PR contains \`.env\` files. Please remove files before mergin this PR.`
      )
}


/** No Fixups */
const are_fixups = danger_commits.find((commit) => commit.message.startsWith('fixup!'))
if(are_fixups){
    fail(
        'This PR contains unsquashed commits. Please use `--autosquash`.'
      )
}

/** Added and removed lines */
const { additions = 0, deletions = 0 } = pr
message(`:tada: The PR added ${additions} and removed ${deletions} lines.`)


/* If it's not a branch PR */
if (pr.base.repo.full_name !== pr.head.repo.full_name) {
    warn("This PR comes from a fork, and won't get JS generated for QA testing this PR inside the Emission Example app.")
}


// TODO: check release version, tests
