import telebot
from config import *

class TelegramSender(object):
    
    def __init__(self, _groupId = None):
        # self.token = config.token
        # self.groupId = config.groupId
        # self.isActive = config.isActive
        
        self.token = token
        if _groupId:
            self.groupId = _groupId
        else:
            self.groupId = groupId
        self.isActive = isActive

        self.bot = telebot.TeleBot(self.token)
        
    def send(self, msg, sendFrom):
        self.bot.send_message(self.groupId, str(sendFrom + '\n' + msg))