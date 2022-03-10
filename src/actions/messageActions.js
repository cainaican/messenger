export const SEND_MESSAGE = '@@message/SEND_MESSAGE'

export const sendMessage = (message, sender, chatId, messageId) => ({
  type: SEND_MESSAGE,
  message,
  sender,
  chatId,
  messageId
})