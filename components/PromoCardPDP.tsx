const PromoCardPDP = () => {
  return (
    <div class="bg-[#F6F6F6] border-[3px] border-[#F2970E] rounded-lg py-3 px-[15px] flex gap-[15px] items-start mb-4 lg:max-w-[410px]">
      <img src="https://fakeimg.pl/48x60" alt="" />
      <div>
        <h1 class="text-[#444] text-[17px] leading-[22px] mb-1">
          <span class="font-semibold">PROMO:</span> iPhone na mão
        </h1>
        <p class="text-[#444] text-[13px] font-semibold leading-[18px]">
          Compre este eBook e ganhe 1 número da sorte para concorrer a esta
          promoção!**
        </p>
      </div>
    </div>
  );
};

export default PromoCardPDP;
