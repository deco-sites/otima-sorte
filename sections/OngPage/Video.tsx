const Video = () => {
  return (
    <div
      class="px-[15px] pb-5 lg:pb-[63px]"
      style={{ background: "linear-gradient(360deg, #F6F6F6 30%, #FFFFFF 0%)" }}
    >
      <div class="w-full max-w-[1414px] aspect-[1414/702] mx-auto">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/NpEaa2P7qZI?si=aj7iTru_EDgslapf&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
};

export default Video;
