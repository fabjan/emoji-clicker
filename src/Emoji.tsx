type EmojiImgProps = {
  instance: string
  size: string
}

const Emoji = ({ instance, size }: EmojiImgProps) => {
  return <span style={{ fontSize: size }}> {instance}</span >;
};

export default Emoji;
