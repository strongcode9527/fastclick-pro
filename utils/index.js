export default function utils() {
  const isClient= typeof window !== 'undefined'
  if(!isClient) {
    return {
      isClient: false,
    }
  }

  function isTypeElement(target) {
    const targetTagName = (target.tagName || '').toLowerCase()
    return targetTagName === 'textarea' || (targetTagName === 'input' && target.type === 'text');
  }
  
  /**
   * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
   *
   * @type boolean
   */
  const deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  
  /**
   * Android requires exceptions.
   *
   * @type boolean
   */
  const deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
  
  
  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */
  const deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  
  
  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */
  const deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
  
  
  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */
  const deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
  
  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */
  const deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

  return {
    isClient,
    deviceIsIOS,
    deviceIsIOS4,
    isTypeElement,
    deviceIsAndroid,
    deviceIsBlackBerry10,
    deviceIsWindowsPhone,
    deviceIsIOSWithBadTarget,
  }

}


