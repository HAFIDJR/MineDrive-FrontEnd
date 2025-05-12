import { CONFIG } from 'src/config-global';

import { VehincleView } from 'src/sections/vehicle/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Users - ${CONFIG.appName}`}</title>

      <VehincleView />
    </>
  );
}
