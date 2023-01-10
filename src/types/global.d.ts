interface Window {
  _AMapSecurityConfig: {
    securityJsCode: string
  }
  QC: {
    Login: {
      check(): boolean
      getMe(callback: (openId: string) => void): void
    }
  }
}
