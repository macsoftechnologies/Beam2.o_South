import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/m3south_frontend/',
  plugins: [
    react({
      babel: {
        // Disable the 500KB compaction threshold so large data files
        // like zones.js don't trigger Babel's deoptimisation warning.
        compact: false,
      },
    }),
    babel({
      presets: [reactCompilerPreset()],
      compact: false,
    }),
  ],
})
