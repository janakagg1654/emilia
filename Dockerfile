FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/CYBER-DARK-YT/whatsapp-bot-md.git /root/Dark/
WORKDIR /root/Dark/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
