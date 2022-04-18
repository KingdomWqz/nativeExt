import os
import winreg


manifest = os.getcwd() + '\manifest.json'
subkey = r'SOFTWARE\Google\Chrome\NativeMessagingHosts\zrpa.chrome.bridge'

winreg.CreateKey(winreg.HKEY_LOCAL_MACHINE, subkey)
winreg.SetValue(winreg.HKEY_LOCAL_MACHINE, subkey, winreg.REG_SZ, manifest)

