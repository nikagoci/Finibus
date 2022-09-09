import { Box, Modal, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const VideoModal = ({openModal, setOpenModal}) => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal"
    >
      <Stack
      onClick={() => setOpenModal(false)}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        cursor="default"
      >
        <Box width="800px" height="500px" position="relative">
          <CloseIcon
            sx={{
              position: "absolute",
              top: "0%",
              right: "-7%",
              cursor: "pointer",
            }}
            fontSize="large"
            onClick={() => setOpenModal(false)}
          />
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/L61p2uyiMSo"
            title="a-blog cms 操作ビデオ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Stack>
    </Modal>
  );
};

export default VideoModal;
