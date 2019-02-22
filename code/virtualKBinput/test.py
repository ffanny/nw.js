import time
import sys
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from pathlib import Path

options = Options()
options.add_argument("nwapp=%s" % os.path.dirname(os.path.abspath(__file__)))
exec_path = os.environ['CHROMEDRIVER']
driver = webdriver.Chrome(executable_path=exec_path, chrome_options=options)

time.sleep(5)
driver.quit()
