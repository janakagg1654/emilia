FROM quay.io/Adhiifx/md:beta
RUN git clone https://github.com/Adhiifx/Cyber-Adhii.git /root/LyFE/
WORKDIR /root/LyFE/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
