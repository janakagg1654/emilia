FROM quay.io/Bashir12340/md:beta
RUN git clone https://github.com/Bashir12340/whatsapp-bot-md.git /root/BASHIR/
WORKDIR /root/BASHIR/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
