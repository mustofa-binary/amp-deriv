import Traffic from './src/utils/traffic'

const is_browser = typeof window !== 'undefined'

export const onInitialClientRender = () => {
    if (is_browser) {
        Traffic.setData()
        Traffic.setAffiliateData()

        const isMobile = () =>
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
            )

        if (!localStorage.getItem('signup_device')) {
            localStorage.setItem('signup_device', isMobile() ? 'mobile' : 'desktop')
        }
    }
}
