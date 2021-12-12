import { useEffect, useState } from "react"

import Localization, { LocalizationJSON, Localize } from "./controller"

function useLocalization<Selected extends object = LocalizationJSON>(selector?: (ll: LocalizationJSON) => Selected): Partial<Selected> {
  const [localization, updateLocalization] = useState(Localize(selector))
  useEffect(() => {
    return Localization.onTransition(() => updateLocalization(Localize(selector)))
  }, [])
  return localization
}

export default useLocalization
