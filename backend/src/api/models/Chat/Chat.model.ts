const messages: string[] = [];

class MessageModel {
  public saveMessage(message: string): void {
    messages.push(message);
  }
}

export default new MessageModel();
