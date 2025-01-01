import { useMediaQuery } from 'react-responsive'

const Component = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  )
}
