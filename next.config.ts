import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'omrontechpumps.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.teffiko.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'leopump.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  async redirects() {
    return [
      // Categories
      { source: '/products/tipcentrifugalpumps', destination: '/products/omr-centrifugal-pumps', permanent: true },
      { source: '/products/screwpumps', destination: '/products/screw-pumps', permanent: true },
      { source: '/products/magnetic-drive-pump', destination: '/products/magnetic-drive-pumps', permanent: true },

      // Centrifugal Pumps Detail
      { source: '/products/tipcentrifugalpumps/tip9a2kx', destination: '/products/omr-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/tip7rkc9x4', destination: '/products/omr-centrifugal-pumps/omc-sr750-slurry-resistant-horizontal-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/tip4m2brdl', destination: '/products/omr-centrifugal-pumps/omc-vc320-vertical-chemical-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/tipa6w9mql', destination: '/products/omr-centrifugal-pumps/omc-ts420-temperature-sensor-horizontal-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/tipx2c9w7a', destination: '/products/omr-centrifugal-pumps/omc-vp450-vertical-process-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/g2ap', destination: '/products/omr-centrifugal-pumps/omc-hc280-horizontal-chemical-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/tipq9l4a7m', destination: '/products/omr-centrifugal-pumps/omc-hp500-high-pressure-horizontal-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/tipl8q5n2m', destination: '/products/omr-centrifugal-pumps/omc-fc260-heavy-duty-horizontal-centrifugal-pump', permanent: true },
      { source: '/products/tipcentrifugalpumps/tip8c2xkwr', destination: '/products/omr-centrifugal-pumps/omc-ht800-high-temperature-horizontal-centrifugal-pump', permanent: true },

      // Screw Pumps Detail
      { source: '/products/screwpumps/ott', destination: '/products/screw-pumps/omt-vs150-viscous-handling-single-screw-pump', permanent: true },
      { source: '/products/screwpumps/gpt7mql8', destination: '/products/screw-pumps/omt-gp200-general-purpose-single-screw-pump', permanent: true },

      // Water Pumps Detail
      { source: '/products/water-pumps/owp35hfr', destination: '/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump', permanent: true },
      { source: '/products/water-pumps/owp7mql8', destination: '/products/water-pumps/omw-ff900-multistage-fire-fighting-centrifugal-pump', permanent: true },

      // Magnetic Drive Pump Detail
      { source: '/products/magnetic-drive-pump/mipa9x2k', destination: '/products/magnetic-drive-pumps/omd-ms250-sealless-magnetic-drive-pump', permanent: true },

      // Solar Pumps Detail
      { source: '/products/solar-pumps/xstp-horizontal-single-stage-centrifugal-pump', destination: '/products/solar-pumps/omrp-es200-horizontal-end-suction-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/xst-standard-centrifugal-pump', destination: '/products/solar-pumps/omrp-cs150-standard-close-coupled-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/xmcm-centrifugal-pump-60hz', destination: '/products/solar-pumps/omrp-hb180-horizontal-booster-centrifugal-pump-60hz', permanent: true },
      { source: '/products/solar-pumps/xhsm-self-priming-centrifugal-pump', destination: '/products/solar-pumps/omrp-sp220-self-priming-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/xgm-centrifugal-pump', destination: '/products/solar-pumps/omrp-pb160-pressure-booster-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/xcm-stainless-steel-multistage-centrifugal-pump', destination: '/products/solar-pumps/omrp-vs350-vertical-stainless-steel-multistage-pump', permanent: true },
      { source: '/products/solar-pumps/xcm-self-priming-stainless-steel-multistage-centrifugal-pump', destination: '/products/solar-pumps/omrp-spm400-self-priming-stainless-multistage-pump', permanent: true },
      { source: '/products/solar-pumps/xbd-leg-horizontal-split-double-suction-fire-fighting-pump', destination: '/products/solar-pumps/omrp-hsc500-horizontal-split-case-double-suction-fire-pump', permanent: true },

      // Intermediate Solar Pump Redirects (from OMC/OMS/OMF/OMR to OMRP)
      { source: '/products/solar-pumps/omc-es200-horizontal-end-suction-centrifugal-pump', destination: '/products/solar-pumps/omrp-es200-horizontal-end-suction-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/omc-cs150-standard-close-coupled-centrifugal-pump', destination: '/products/solar-pumps/omrp-cs150-standard-close-coupled-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/omc-hb180-horizontal-booster-centrifugal-pump-60hz', destination: '/products/solar-pumps/omrp-hb180-horizontal-booster-centrifugal-pump-60hz', permanent: true },
      { source: '/products/solar-pumps/omc-sp220-self-priming-centrifugal-pump', destination: '/products/solar-pumps/omrp-sp220-self-priming-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/omc-pb160-pressure-booster-centrifugal-pump', destination: '/products/solar-pumps/omrp-pb160-pressure-booster-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/oms-vs350-vertical-stainless-steel-multistage-pump', destination: '/products/solar-pumps/omrp-vs350-vertical-stainless-steel-multistage-pump', permanent: true },
      { source: '/products/solar-pumps/oms-spm400-self-priming-stainless-multistage-pump', destination: '/products/solar-pumps/omrp-spm400-self-priming-stainless-multistage-pump', permanent: true },
      { source: '/products/solar-pumps/omf-hsc500-horizontal-split-case-double-suction-fire-pump', destination: '/products/solar-pumps/omrp-hsc500-horizontal-split-case-double-suction-fire-pump', permanent: true },
      { source: '/products/solar-pumps/omr-es200-horizontal-end-suction-centrifugal-pump', destination: '/products/solar-pumps/omrp-es200-horizontal-end-suction-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/omr-cs150-standard-close-coupled-centrifugal-pump', destination: '/products/solar-pumps/omrp-cs150-standard-close-coupled-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/omr-sp220-self-priming-centrifugal-pump', destination: '/products/solar-pumps/omrp-sp220-self-priming-centrifugal-pump', permanent: true },
      { source: '/products/solar-pumps/omr-hsc500-horizontal-split-case-double-suction-fire-pump', destination: '/products/solar-pumps/omrp-hsc500-horizontal-split-case-double-suction-fire-pump', permanent: true },

      // Legacy Centrifugal Redirects (to OMR)
      { source: '/products/omc-centrifugal-pumps', destination: '/products/omr-centrifugal-pumps', permanent: true },
    ];
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
