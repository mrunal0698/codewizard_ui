import React, { useEffect, useState } from "react";
import { Modal, Box } from "@mui/material";
import { Text, Button, Img } from "components";
import CopyToClipboard from "react-copy-to-clipboard";
import Helper from 'shared/helper';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
   bgcolor: 'blur',
  boxShadow: 24,
};

const CopyLinkToClipboard = ({ link }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    if (linkCopied) {
      const timeout = setTimeout(() => setLinkCopied(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [linkCopied]);

  return (
    <div className="flex w-[60%] items-center border-[1px] border-teal_800 rounded-md">
      <input
        className="bg-gray_902 p-[12px] text-[16px] text-gray_300 w-[100%] rounded-md cursor-text"
        value={link}
        type="url"
        disabled
      />
      <CopyToClipboard text={link} onCopy={() => setLinkCopied(true)}>
        <div className="flex items-center justify-center bg-gradient h-[100%] w-[3rem] cursor-pointer rounded p-[12px]">
          <img
            className="w-[24px] h-[24px]"
            src={
              !linkCopied
                ? "images/copyToClipboard.svg"
                : "images/tick-circle-outline.svg"
            }
            alt="icon"
          />
        </div>
      </CopyToClipboard>
    </div>
  );
};

const RenderAlerts = (data) => {
  if (data && typeof data === "string") {
    return (
      <Text className="ml-7 text-gray_50 text-[16px] leading-6" variant="body2">
        {data} <br />
      </Text>
    );
  }

  if (Array.isArray(data)) {
    return data.map((item, index) => (
      <React.Fragment key={index}>{RenderAlerts(item)}</React.Fragment>
    ));
  }

  if (typeof data === "object" && data !== null) {
    return (
      <ul className="flex flex-col gap-1 list-disc list-inside text-core w-[100%] pl-4">
        {Object.entries(data).map(([key, value], idx) => (
          <li key={idx}>
            <Text className="text-gray_50 text-[16px]" variant="body2">
              {key}: <br />
            </Text>
            {RenderAlerts(value)}
          </li>
        ))}
      </ul>
    )
  }

  return null;
};

const AlertControls = ({ message, link, title, alertType }) => (
  <>
      {alertType ==='error' && (
        <div className="flex items-center gap-3 w-[100%]">
          <Img src="images/bx_error.svg" className="h-10 w-10" />
          <Text className="text-[#F4BD00] font-medium" as="h5" variant="h5">
            Error
          </Text>
        </div>
      )}

      {!Helper.IsNullValue(title) && (
        <Text className="font-semibold text-core mt-6 w-[100%]" as="h6" variant="h6">
          {title}
        </Text>
      )}

      <div className="w-[100%] overflow-y-auto pb-6">
        {RenderAlerts(message)}
      </div>

      {link && <CopyLinkToClipboard link={link} />}
  </>
);

const AlertBoxModal = ({
  className,
  title,
  message,
  isOpen,
  onClose,
  onConfirm,
  confirmText,
  closeText,
  showCloseIcon,
  link,
  alertType
}) => {
  return (
    <Modal open={isOpen} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={modalStyle} className={`font-inter bg-gray_901 p-[24px] rounded-md ${className}`}>
        {showCloseIcon && (
          <Img
            src="images/img_close_gray_801.svg"
            className="absolute right-4 top-4 cursor-pointer hover:scale-125"
            onClick={onClose}
          />
        )}

        <div className="flex flex-col gap-4 w-full h-[90%] overflow-y-auto">
          <AlertControls message={message} link={link} alertType={alertType} title={title} />
        </div>

        <div className="flex justify-center gap-4 mt-5 w-full">
          {onClose && (
            <Button
              onClick={onClose}
              className="border border-error text-core w-[161px] px-3 py-2 hover:bg-gray_904 rounded"
            >
              {closeText}
            </Button>
          )}
          {onConfirm && (
            <Button
              onClick={onConfirm}
              className="bg-primary text-core w-[161px] px-3 py-2 rounded"
            >
              {confirmText}
            </Button>
          )}
        </div>
      </Box>
    </Modal>
  );
};

AlertBoxModal.defaultProps = {
  title: "",
  message: "Oops! Something went wrong...",
  isOpen: false,
  confirmText: "Retry",
  closeText: "Cancel",
  showCloseIcon: false,
  link: "",
};

export default React.memo(AlertBoxModal);
