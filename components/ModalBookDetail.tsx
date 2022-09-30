import React from "react";
import { Modal, Button, Text, Grid, Image, Spacer } from "@nextui-org/react";

export default function ModalBookDetail() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto shadow onClick={handler}>
        Open modal
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="600px"
        css={{
          borderRadius: 7,
        }}
      >
        <div className="mx-auto">
          <Modal.Header>
            {/* <Text id="modal-title" size={18}>
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text> */}
          </Modal.Header>
          <Modal.Body>
            <Grid.Container gap={2}>
              <Grid>
                <Image
                  src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                  objectFit="none"
                  alt="Default Image"
                  width={200}
                  height={300}
                />
              </Grid>
              <Grid className="w-[200px]">
                <div className="w-[120px] mx-auto">
                  <Text h5>我是書籍名稱</Text>
                  <Text>作者 abc</Text>
                  <Text>作者 abc</Text>
                  <Text>作者 abc</Text>
                  <Spacer />
                  <Button
                    auto
                    onClick={closeHandler}
                    className="mx-auto"
                    css={{
                      borderRadius: 3,
                    }}
                  >
                    開始閱讀
                  </Button>
                </div>
              </Grid>
            </Grid.Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
