FROM quay.io/alpha1nexon/ALPHABOT
RUN git clone https://github.com/alpha1nexon/ALPHABOT/root/LyFE/
WORKDIR /root/LyFE/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
