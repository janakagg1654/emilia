FROM quay.io/lyfe00011/md:latest 
RUN git clone https://github.com/Ultar12/whatsapp-bot-md /root/LyFE/
WORKDIR /root/LyFE/
RUN yarn install --network-concurrency 1
CMD ["npm", "index.js"]
