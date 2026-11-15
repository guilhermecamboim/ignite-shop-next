import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

// Migrado de .eslintrc.json ("extends": "next/core-web-vitals") para flat config,
// exigido pelo eslint-config-next 16 (o comando "next lint" foi removido no Next 16).
const eslintConfig = [
  ...nextCoreWebVitals,
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
]

export default eslintConfig
