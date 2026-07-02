import { Effect } from "effect"
import type { DatabaseMigration } from "../migration"

export default {
  id: "20260702201925_serious_mad_thinker",
  up(tx) {
    return Effect.gen(function* () {
      yield* tx.run(`ALTER TABLE \`project\` ADD \`remotes\` text;`)
    })
  },
} satisfies DatabaseMigration.Migration
