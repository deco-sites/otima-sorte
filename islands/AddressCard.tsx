import { useState } from "preact/hooks";

const AddressCard = ({ address }: { address: Address }) => {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (event: any) => {
    const country = event.target.value;
    const selectedCountryData =
      event.target.selectedOptions[0].dataset.provinces;
    setSelectedCountry(country);

    // Parse provinces data if available
    if (selectedCountryData) {
      setProvinces(JSON.parse(selectedCountryData));
    } else {
      // Clear provinces if not available
      setProvinces([]);
    }
  };

  return (
    <li>
      {address.default && <h2 class="text-center text-xl mb-3">Padrão</h2>}
      <p class="text-center mb-3">
        {address.first_name} {address.last_name}
        <br />
        {address.address1}
        <br />
        {address.city}
        <br />
        {address.zip}
        <br />
        {address.country === "Brazil" ? "Brasil" : address.country}
      </p>
      <div class="flex items-center justify-center gap-4">
        <button class="bg-[#2E385F] w-full max-w-[186px] h-[35px] rounded-lg flex items-center justify-center text-white text-[13px] font-medium leading-normal">
          Editar
        </button>
        <button class="bg-[#2E385F] w-full max-w-[186px] h-[35px] rounded-lg flex items-center justify-center text-white text-[13px] font-medium leading-normal">
          Excluir
        </button>
      </div>
      <div>
        <h2 class="text-center text-xl mb-3 mt-3">Editar endereço</h2>
        <form class="flex flex-col gap-3">
          <div class="flex items-center justify-between gap-5">
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="address_first_name"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Nome
              </label>
              <input
                id="address_first_name"
                name="address_first_name"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
              />
            </div>
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="address_last_name"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Sobrenome
              </label>
              <input
                id="address_last_name"
                name="address_last_name"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
              />
            </div>
          </div>
          <div class="w-full flex flex-col gap-2">
            <label
              htmlFor="address_company"
              class="text-[#444] text-base font-bold leading-normal"
            >
              Empresa
            </label>
            <input
              id="address_company"
              name="address_company"
              class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
            />
          </div>
          <div class="w-full flex flex-col gap-2">
            <label
              htmlFor="address_address1"
              class="text-[#444] text-base font-bold leading-normal"
            >
              Endereço 1
            </label>
            <input
              id="address_address1"
              name="address_address1"
              class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
            />
          </div>
          <div class="w-full flex flex-col gap-2">
            <label
              htmlFor="address_address2"
              class="text-[#444] text-base font-bold leading-normal"
            >
              Endereço 2
            </label>
            <input
              id="address_address2"
              name="address_address2"
              class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
            />
          </div>
          <div class="w-full flex flex-col gap-2">
            <label
              htmlFor="address_city"
              class="text-[#444] text-base font-bold leading-normal"
            >
              Cidade
            </label>
            <input
              id="address_city"
              name="address_city"
              class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
            />
          </div>
          <div class="w-full flex flex-col gap-2">
            <label
              htmlFor="address_country"
              class="text-[#444] text-base font-bold leading-normal"
            >
              País/Região
            </label>
            <select
              id="address_country"
              name="address_country"
              class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="Afghanistan" data-provinces="[]">
                Afeganistão
              </option>
              <option
                value="South Africa"
                data-provinces='[["Eastern Cape","Cabo Oriental"],["Free State","Estado Livre"],["Gauteng","Gauteng"],["KwaZulu-Natal","KwaZulu-Natal"],["Limpopo","Limpopo"],["Mpumalanga","Mpumalanga"],["North West","Noroeste"],["Northern Cape","Cabo Setentrional"],["Western Cape","Cabo Ocidental"]]'
              >
                África do Sul
              </option>
              <option value="Albania" data-provinces="[]">
                Albânia
              </option>
              <option value="Germany" data-provinces="[]">
                Alemanha
              </option>
              <option value="Andorra" data-provinces="[]">
                Andorra
              </option>
              <option value="Angola" data-provinces="[]">
                Angola
              </option>
              <option value="Anguilla" data-provinces="[]">
                Anguila
              </option>
              <option value="Antigua And Barbuda" data-provinces="[]">
                Antígua e Barbuda
              </option>
              <option value="Saudi Arabia" data-provinces="[]">
                Arábia Saudita
              </option>
              <option value="Algeria" data-provinces="[]">
                Argélia
              </option>
              <option
                value="Argentina"
                data-provinces='[["Buenos Aires","Buenos Aires"],["Catamarca","Catamarca"],["Chaco","Chaco"],["Chubut","Chubut"],["Ciudad Autónoma de Buenos Aires","Cidade Autônoma de Buenos Aires"],["Corrientes","Corrientes"],["Córdoba","Córdova (província da Argentina)"],["Entre Ríos","Entre Ríos"],["Formosa","Formosa"],["Jujuy","Jujuy"],["La Pampa","La Pampa"],["La Rioja","Rioja"],["Mendoza","Mendoza (província)"],["Misiones","Misiones"],["Neuquén","Neuquén"],["Río Negro","Río Negro"],["Salta","Salta"],["San Juan","San Juan"],["San Luis","San Luis"],["Santa Cruz","Santa Cruz"],["Santa Fe","Santa Fé"],["Santiago Del Estero","Santiago del Estero"],["Tierra Del Fuego","Terra do Fogo, Antártica e Ilhas do Atlântico Sul"],["Tucumán","Tucumán"]]'
              >
                Argentina
              </option>
              <option value="Armenia" data-provinces="[]">
                Armênia
              </option>
              <option value="Aruba" data-provinces="[]">
                Aruba
              </option>
              <option
                value="Australia"
                data-provinces='[["Australian Capital Territory","Território da Capital Australiana"],["New South Wales","Nova Gales do Sul"],["Northern Territory","Território do Norte"],["Queensland","Queensland"],["South Australia","Austrália Meridional"],["Tasmania","Tasmânia"],["Victoria","Vitória"],["Western Australia","Austrália Ocidental"]]'
              >
                Austrália
              </option>
              <option value="Austria" data-provinces="[]">
                Áustria
              </option>
              <option value="Azerbaijan" data-provinces="[]">
                Azerbaijão
              </option>
              <option value="Bahamas" data-provinces="[]">
                Bahamas
              </option>
              <option value="Bangladesh" data-provinces="[]">
                Bangladesh
              </option>
              <option value="Barbados" data-provinces="[]">
                Barbados
              </option>
              <option value="Bahrain" data-provinces="[]">
                Barein
              </option>
              <option value="Belgium" data-provinces="[]">
                Bélgica
              </option>
              <option value="Belize" data-provinces="[]">
                Belize
              </option>
              <option value="Benin" data-provinces="[]">
                Benin
              </option>
              <option value="Bermuda" data-provinces="[]">
                Bermudas
              </option>
              <option value="Belarus" data-provinces="[]">
                Bielorrússia
              </option>
              <option value="Bolivia" data-provinces="[]">
                Bolívia
              </option>
              <option value="Bosnia And Herzegovina" data-provinces="[]">
                Bósnia e Herzegovina
              </option>
              <option value="Botswana" data-provinces="[]">
                Botsuana
              </option>
              <option
                value="Brazil"
                data-provinces='[["Acre","Acre"],["Alagoas","Alagoas"],["Amapá","Amapá"],["Amazonas","Amazonas"],["Bahia","Bahia"],["Ceará","Ceará"],["Distrito Federal","Distrito Federal"],["Espírito Santo","Espírito Santo"],["Goiás","Goiás"],["Maranhão","Maranhão"],["Mato Grosso","Mato Grosso"],["Mato Grosso do Sul","Mato Grosso do Sul"],["Minas Gerais","Minas Gerais"],["Paraná","Paraná"],["Paraíba","Paraíba"],["Pará","Pará"],["Pernambuco","Pernambuco"],["Piauí","Piauí"],["Rio Grande do Norte","Rio Grande do Norte"],["Rio Grande do Sul","Rio Grande do Sul"],["Rio de Janeiro","Rio de Janeiro"],["Rondônia","Rondônia"],["Roraima","Roraima"],["Santa Catarina","Santa Catarina"],["Sergipe","Sergipe"],["São Paulo","São Paulo"],["Tocantins","Tocantins"]]'
              >
                Brasil
              </option>
              <option value="Brunei" data-provinces="[]">
                Brunei
              </option>
              <option value="Bulgaria" data-provinces="[]">
                Bulgária
              </option>
              <option value="Burkina Faso" data-provinces="[]">
                Burquina Faso
              </option>
              <option value="Burundi" data-provinces="[]">
                Burundi
              </option>
              <option value="Bhutan" data-provinces="[]">
                Butão
              </option>
              <option value="Cape Verde" data-provinces="[]">
                Cabo Verde
              </option>
              <option value="Republic of Cameroon" data-provinces="[]">
                Camarões
              </option>
              <option value="Cambodia" data-provinces="[]">
                Camboja
              </option>
              <option
                value="Canada"
                data-provinces='[["Alberta","Alberta"],["British Columbia","Colúmbia Britânica"],["Manitoba","Manitoba"],["New Brunswick","Nova Brunswick"],["Newfoundland and Labrador","Terra Nova e Labrador"],["Northwest Territories","Territórios do Noroeste"],["Nova Scotia","Nova Escócia"],["Nunavut","Nunavut"],["Ontario","Ontário"],["Prince Edward Island","Ilha do Príncipe Eduardo"],["Quebec","Quebec"],["Saskatchewan","Saskatchewan"],["Yukon","Yukon"]]'
              >
                Canadá
              </option>
              <option value="Qatar" data-provinces="[]">
                Catar
              </option>
              <option value="Kazakhstan" data-provinces="[]">
                Cazaquistão
              </option>
              <option value="Chad" data-provinces="[]">
                Chade
              </option>
              <option
                value="Chile"
                data-provinces='[["Antofagasta","Região de Antofagasta"],["Araucanía","Região da Araucanía"],["Arica and Parinacota","Região de Arica e Parinacota"],["Atacama","Região de Atacama"],["Aysén","Aisén (região)"],["Biobío","Região de Bío-Bío"],["Coquimbo","Região de Coquimbo"],["Los Lagos","Região de Los Lagos"],["Los Ríos","Região de Los Rios"],["Magallanes","Magalhães e Antártica Chilena"],["Maule","Região de Maule"],["O&apos;Higgins","Região de O’Higgins"],["Santiago","Região Metropolitana de Santiago"],["Tarapacá","Região de Tarapacá"],["Valparaíso","Região de Valparaíso"],["Ñuble","Ñuble"]]'
              >
                Chile
              </option>
              <option
                value="China"
                data-provinces='[["Anhui","Anhui"],["Beijing","Pequim"],["Chongqing","Chongqing"],["Fujian","Fujian"],["Gansu","Gansu"],["Guangdong","Guangdong"],["Guangxi","Guangxi"],["Guizhou","Guizhou"],["Hainan","Hainan"],["Hebei","Hebei"],["Heilongjiang","Heilongjiang"],["Henan","Henan"],["Hubei","Hubei"],["Hunan","Hunan"],["Inner Mongolia","Mongólia Interior"],["Jiangsu","Jiangsu"],["Jiangxi","Jiangxi"],["Jilin","Jilin"],["Liaoning","Liaoning"],["Ningxia","Ningxia"],["Qinghai","Qinghai"],["Shaanxi","Shaanxi"],["Shandong","Shandong"],["Shanghai","Xangai"],["Shanxi","Shanxi"],["Sichuan","Sichuan"],["Tianjin","Tianjin"],["Xinjiang","Xinjiang"],["Xizang","Região Autônoma do Tibete"],["Yunnan","Yunnan"],["Zhejiang","Zhejiang"]]'
              >
                China
              </option>
              <option value="Cyprus" data-provinces="[]">
                Chipre
              </option>
              <option value="Holy See (Vatican City State)" data-provinces="[]">
                Cidade do Vaticano
              </option>
              <option
                value="Colombia"
                data-provinces='[["Amazonas","Amazonas"],["Antioquia","Antioquia"],["Arauca","Arauca"],["Atlántico","Atlántico"],["Bogotá, D.C.","Bogotá, DC"],["Bolívar","Bolívar"],["Boyacá","Boyacá"],["Caldas","Caldas"],["Caquetá","Caquetá"],["Casanare","Casanare"],["Cauca","Cauca"],["Cesar","Cesar"],["Chocó","Chocó"],["Cundinamarca","Cundinamarca"],["Córdoba","Córdoba (departamento)"],["Guainía","Guainía"],["Guaviare","Guaviare"],["Huila","Huila"],["La Guajira","Guajira"],["Magdalena","Magdalena"],["Meta","Meta"],["Nariño","Nariño"],["Norte de Santander","Norte de Santander"],["Putumayo","Putumayo"],["Quindío","Quindío"],["Risaralda","Risaralda"],["San Andrés, Providencia y Santa Catalina","Santo André, Providência e Santa Catarina"],["Santander","Santander"],["Sucre","Sucre"],["Tolima","Tolima"],["Valle del Cauca","Valle del Cauca"],["Vaupés","Vaupés"],["Vichada","Vichada"]]'
              >
                Colômbia
              </option>
              <option value="Comoros" data-provinces="[]">
                Comores
              </option>
              <option
                value="Congo, The Democratic Republic Of The"
                data-provinces="[]"
              >
                Congo - Kinshasa
              </option>
              <option
                value="South Korea"
                data-provinces='[["Busan","Busan"],["Chungbuk","Chungcheong do Norte"],["Chungnam","Chungcheong do Sul"],["Daegu","Daegu"],["Daejeon","Daejeon"],["Gangwon","Gangwon"],["Gwangju","Gwangju"],["Gyeongbuk","Gyeongsang do Norte"],["Gyeonggi","Gyeonggi"],["Gyeongnam","Gyeongsang do Sul"],["Incheon","Incheon"],["Jeju","Jeju"],["Jeonbuk","Jeolla do Norte"],["Jeonnam","Jeolla do Sul"],["Sejong","Cidade de Sejong"],["Seoul","Seul"],["Ulsan","Ulsan"]]'
              >
                Coreia do Sul
              </option>
              <option
                value="Costa Rica"
                data-provinces='[["Alajuela","Alajuela"],["Cartago","Cartago"],["Guanacaste","Guanacaste"],["Heredia","Heredia"],["Limón","Limón"],["Puntarenas","Puntarenas"],["San José","San José"]]'
              >
                Costa Rica
              </option>
              <option value="Côte d'Ivoire" data-provinces="[]">
                Costa do Marfim
              </option>
              <option value="Croatia" data-provinces="[]">
                Croácia
              </option>
              <option value="Curaçao" data-provinces="[]">
                Curaçao
              </option>
              <option value="Denmark" data-provinces="[]">
                Dinamarca
              </option>
              <option value="Djibouti" data-provinces="[]">
                Djibuti
              </option>
              <option value="Dominica" data-provinces="[]">
                Dominica
              </option>
              <option
                value="Egypt"
                data-provinces='[["6th of October","6 de outubro"],["Al Sharqia","Xarqia"],["Alexandria","Alexandria (província egípcia)"],["Aswan","Assuão"],["Asyut","Assiut"],["Beheira","Al-Buhaira"],["Beni Suef","Beni Suef"],["Cairo","Cairo"],["Dakahlia","Dakahlia"],["Damietta","Damieta"],["Faiyum","Faium"],["Gharbia","Garbia"],["Giza","Guizé"],["Helwan","Helwan"],["Ismailia","Ismaília"],["Kafr el-Sheikh","Kafr el-Sheikh"],["Luxor","Luxor"],["Matrouh","Matruh"],["Minya","Minya"],["Monufia","Monufia"],["New Valley","Vale Novo"],["North Sinai","Sinai do Norte"],["Port Said","Governamento de Porto Said"],["Qalyubia","Qaliubia"],["Qena","Qina"],["Red Sea","Mar Vermelho"],["Sohag","Sohag"],["South Sinai","Sinai do Sul"],["Suez","Suez"]]'
              >
                Egito
              </option>
              <option
                value="El Salvador"
                data-provinces='[["Ahuachapán","Ahuachapán"],["Cabañas","Cabañas"],["Chalatenango","Chalatenango"],["Cuscatlán","Cuscatlán"],["La Libertad","La Libertad"],["La Paz","La Paz"],["La Unión","La Unión"],["Morazán","Morazán"],["San Miguel","San Miguel"],["San Salvador","San Salvador"],["San Vicente","San Vicente"],["Santa Ana","Santa Ana"],["Sonsonate","Sonsonate"],["Usulután","Usulután"]]'
              >
                El Salvador
              </option>
              <option
                value="United Arab Emirates"
                data-provinces='[["Abu Dhabi","Emirados Abu Dhabi"],["Ajman","Ajman"],["Dubai","Dubai"],["Fujairah","Al Fujayrah"],["Ras al-Khaimah","Ras al-Khaimah"],["Sharjah","Sharjah"],["Umm al-Quwain","Umm al Qaywayn"]]'
              >
                Emirados Árabes Unidos
              </option>
              <option value="Ecuador" data-provinces="[]">
                Equador
              </option>
              <option value="Eritrea" data-provinces="[]">
                Eritreia
              </option>
              <option value="Slovakia" data-provinces="[]">
                Eslováquia
              </option>
              <option value="Slovenia" data-provinces="[]">
                Eslovênia
              </option>
              <option
                value="Spain"
                data-provinces='[["A Coruña","Corunha"],["Albacete","Albacete"],["Alicante","Alicante"],["Almería","Almeria"],["Asturias","Asturias Province"],["Badajoz","Badajoz (província)"],["Balears","Baleares²"],["Barcelona","Barcelona"],["Burgos","Burgos"],["Cantabria","Cantábria²"],["Castellón","Castellón"],["Ceuta","Ceuta"],["Ciudad Real","Cidade Real"],["Cuenca","Cuenca"],["Cáceres","Cáceres (província)"],["Cádiz","Cádis"],["Córdoba","Córdova (província da Espanha)"],["Girona","Girona"],["Granada","Granada"],["Guadalajara","Guadalajara"],["Guipúzcoa","Guipúscoa"],["Huelva","Província de Huelva"],["Huesca","Huesca"],["Jaén","Jaén"],["La Rioja","La Rioja"],["Las Palmas","Las Palmas"],["León","Leão"],["Lleida","Província de Lérida"],["Lugo","Lugo"],["Madrid","Madrid Province"],["Melilla","Melilla"],["Murcia","Murcia"],["Málaga","Málaga"],["Navarra","Navarra²"],["Ourense","Ourense"],["Palencia","Palência"],["Pontevedra","Pontevedra"],["Salamanca","Salamanca"],["Santa Cruz de Tenerife","Santa Cruz de Tenerife"],["Segovia","Segóvia"],["Sevilla","Província de Sevilha"],["Soria","Sória"],["Tarragona","Tarragona"],["Teruel","Teruel (província)"],["Toledo","Toledo"],["Valencia","Valência (província)"],["Valladolid","Valhadolide"],["Vizcaya","Biscaia"],["Zamora","Zamora"],["Zaragoza","Saragoça"],["Álava","Álava"],["Ávila","Ávila"]]'
              >
                Espanha
              </option>
              <option value="Eswatini" data-provinces="[]">
                Essuatíni
              </option>
              <option
                value="United States"
                data-provinces='[["Alabama","Alabama"],["Alaska","Alasca"],["American Samoa","Samoa Americana"],["Arizona","Arizona"],["Arkansas","Arkansas"],["Armed Forces Americas","Forças Armadas das Américas"],["Armed Forces Europe","Forças Armadas da Europa"],["Armed Forces Pacific","Forças Armadas do Pacífico"],["California","Califórnia"],["Colorado","Colorado"],["Connecticut","Connecticut"],["Delaware","Delaware"],["District of Columbia","Washington"],["Federated States of Micronesia","Micronésia"],["Florida","Flórida"],["Georgia","Geórgia"],["Guam","Guam"],["Hawaii","Havaí"],["Idaho","Idaho"],["Illinois","Illinois"],["Indiana","Indiana"],["Iowa","Iowa"],["Kansas","Kansas"],["Kentucky","Kentucky"],["Louisiana","Luisiana"],["Maine","Maine"],["Marshall Islands","Ilhas Marshall"],["Maryland","Maryland"],["Massachusetts","Massachusetts"],["Michigan","Michigan"],["Minnesota","Minnesota"],["Mississippi","Mississippi"],["Missouri","Missouri"],["Montana","Montana"],["Nebraska","Nebraska"],["Nevada","Nevada"],["New Hampshire","Nova Hampshire"],["New Jersey","Nova Jérsia"],["New Mexico","Novo México"],["New York","Nova Iorque"],["North Carolina","Carolina do Norte"],["North Dakota","Dakota do Norte"],["Northern Mariana Islands","Ilhas Marianas do Norte"],["Ohio","Ohio"],["Oklahoma","Oklahoma"],["Oregon","Oregon"],["Palau","Palau"],["Pennsylvania","Pensilvânia"],["Puerto Rico","Porto Rico"],["Rhode Island","Rhode Island"],["South Carolina","Carolina do Sul"],["South Dakota","Dakota do Sul"],["Tennessee","Tennessee"],["Texas","Texas"],["Utah","Utah"],["Vermont","Vermont"],["Virgin Islands","Ilhas Virgens Americanas"],["Virginia","Virgínia"],["Washington","Washington²"],["West Virginia","Virgínia Ocidental"],["Wisconsin","Wisconsin"],["Wyoming","Wyoming"]]'
              >
                Estados Unidos
              </option>
              <option value="Estonia" data-provinces="[]">
                Estônia
              </option>
              <option value="Ethiopia" data-provinces="[]">
                Etiópia
              </option>
              <option value="Fiji" data-provinces="[]">
                Fiji
              </option>
              <option
                value="Philippines"
                data-provinces='[["Abra","Abra (província)"],["Agusan del Norte","Agusão do Norte"],["Agusan del Sur","Augusan do Sur"],["Aklan","Aklan"],["Albay","Albay"],["Antique","Antigo"],["Apayao","Apayao"],["Aurora","Aurora"],["Basilan","Província de Basilan"],["Bataan","Bataan"],["Batanes","Batanes"],["Batangas","Batangas"],["Benguet","Província de Benguet"],["Biliran","Biliran"],["Bohol","Bohol"],["Bukidnon","Bukidnon"],["Bulacan","Bulacão"],["Cagayan","Cagayan"],["Camarines Norte","Camarines Norte"],["Camarines Sur","Camarines Sur"],["Camiguin","Camiguin"],["Capiz","Capiz"],["Catanduanes","Catanduanes"],["Cavite","Província de Cavite"],["Cebu","Cebu"],["Cotabato","Cotabato"],["Davao Occidental","Davao Occidental"],["Davao Oriental","Davao Oriental"],["Davao de Oro","Vale de Compostela"],["Davao del Norte","Davao del Norte"],["Davao del Sur","Davao do Sul"],["Dinagat Islands","Dinagat Islands"],["Eastern Samar","Samar Oriental"],["Guimaras","Guimaras"],["Ifugao","Ifugão"],["Ilocos Norte","Ilocos Norte"],["Ilocos Sur","Ilocos Sur"],["Iloilo","Iloilo"],["Isabela","Isabela"],["Kalinga","Província de Kalinga"],["La Union","La Unión"],["Laguna","Laguna"],["Lanao del Norte","Lanão do Norte"],["Lanao del Sur","Lanão de Sur"],["Leyte","Leyte"],["Maguindanao","Maguindanao"],["Marinduque","Marinduque"],["Masbate","Masbate"],["Metro Manila","Grande Manila"],["Misamis Occidental","Misamis Occidental"],["Misamis Oriental","Misamis Oriental"],["Mountain Province","Província Mountain"],["Negros Occidental","Negros Ocidental"],["Negros Oriental","Negros Oriental"],["Northern Samar","Northern Samar"],["Nueva Ecija","Nueva Ecija"],["Nueva Vizcaya","Nova Vizcaya"],["Occidental Mindoro","Mindoro Ocidental"],["Oriental Mindoro","Oriental Mindoro"],["Palawan","Palawan"],["Pampanga","Pampanga"],["Pangasinan","Pangasinán"],["Quezon","Quezon"],["Quirino","Quirino"],["Rizal","Rizal"],["Romblon","Romblon"],["Samar","Samar"],["Sarangani","Sarangani"],["Siquijor","Siquijor"],["Sorsogon","Sorsogon"],["South Cotabato","Cotabato do Sul"],["Southern Leyte","Southern Leyte"],["Sultan Kudarat","Sultão Kudarat"],["Sulu","Sulu"],["Surigao del Norte","Surigão do Norte"],["Surigao del Sur","Surigão do Sur"],["Tarlac","Tarlac"],["Tawi-Tawi","Tawi-Tawi"],["Zambales","Zambales"],["Zamboanga Sibugay","Zamboanga Sibugay"],["Zamboanga del Norte","Zamboanga del Norte"],["Zamboanga del Sur","Zamboanga del Sur"]]'
              >
                Filipinas
              </option>
              <option value="Finland" data-provinces="[]">
                Finlândia
              </option>
              <option value="France" data-provinces="[]">
                França
              </option>
              <option value="Gabon" data-provinces="[]">
                Gabão
              </option>
              <option value="Gambia" data-provinces="[]">
                Gâmbia
              </option>
              <option value="Ghana" data-provinces="[]">
                Gana
              </option>
              <option value="Georgia" data-provinces="[]">
                Geórgia
              </option>
              <option value="Gibraltar" data-provinces="[]">
                Gibraltar
              </option>
              <option value="Grenada" data-provinces="[]">
                Granada
              </option>
              <option value="Greece" data-provinces="[]">
                Grécia
              </option>
              <option value="Greenland" data-provinces="[]">
                Groenlândia
              </option>
              <option value="Guadeloupe" data-provinces="[]">
                Guadalupe
              </option>
              <option
                value="Guatemala"
                data-provinces='[["Alta Verapaz","Alta Verapaz"],["Baja Verapaz","Baja Verapaz"],["Chimaltenango","Chimaltenango"],["Chiquimula","Chiquimula"],["El Progreso","El Progreso"],["Escuintla","Escuintla"],["Guatemala","Guatemala"],["Huehuetenango","Huehuetenango"],["Izabal","Izabal"],["Jalapa","Jalapa"],["Jutiapa","Jutiapa"],["Petén","El Petén"],["Quetzaltenango","Quetzaltenango"],["Quiché","El Quiché"],["Retalhuleu","Retalhuleu"],["Sacatepéquez","Sacatepéquez"],["San Marcos","San Marcos"],["Santa Rosa","Santa Rosa"],["Sololá","Sololá"],["Suchitepéquez","Suchitepéquez"],["Totonicapán","Totonicapán"],["Zacapa","Zacapa"]]'
              >
                Guatemala
              </option>
              <option value="Guernsey" data-provinces="[]">
                Guernsey
              </option>
              <option value="Guyana" data-provinces="[]">
                Guiana
              </option>
              <option value="French Guiana" data-provinces="[]">
                Guiana Francesa
              </option>
              <option value="Guinea" data-provinces="[]">
                Guiné
              </option>
              <option value="Equatorial Guinea" data-provinces="[]">
                Guiné Equatorial
              </option>
              <option value="Guinea Bissau" data-provinces="[]">
                Guiné-Bissau
              </option>
              <option value="Haiti" data-provinces="[]">
                Haiti
              </option>
              <option value="Honduras" data-provinces="[]">
                Honduras
              </option>
              <option
                value="Hong Kong"
                data-provinces='[["Hong Kong Island","Ilha de Hong Kong"],["Kowloon","Kowloon"],["New Territories","Novos Territórios"]]'
              >
                Hong Kong, RAE da China
              </option>
              <option value="Hungary" data-provinces="[]">
                Hungria
              </option>
              <option value="Yemen" data-provinces="[]">
                Iêmen
              </option>
              <option value="Christmas Island" data-provinces="[]">
                Ilha Christmas
              </option>
              <option value="Norfolk Island" data-provinces="[]">
                Ilha Norfolk
              </option>
              <option value="Ascension Island" data-provinces="[]">
                Ilha de Ascensão
              </option>
              <option value="Isle Of Man" data-provinces="[]">
                Ilha de Man
              </option>
              <option value="Aland Islands" data-provinces="[]">
                Ilhas Aland
              </option>
              <option value="Cayman Islands" data-provinces="[]">
                Ilhas Cayman
              </option>
              <option value="Cocos (Keeling) Islands" data-provinces="[]">
                Ilhas Cocos (Keeling)
              </option>
              <option value="Cook Islands" data-provinces="[]">
                Ilhas Cook
              </option>
              <option value="Faroe Islands" data-provinces="[]">
                Ilhas Faroé
              </option>
              <option
                value="South Georgia And The South Sandwich Islands"
                data-provinces="[]"
              >
                Ilhas Geórgia do Sul e Sandwich do Sul
              </option>
              <option value="Falkland Islands (Malvinas)" data-provinces="[]">
                Ilhas Malvinas
              </option>
              <option
                value="United States Minor Outlying Islands"
                data-provinces="[]"
              >
                Ilhas Menores Distantes dos EUA
              </option>
              <option value="Pitcairn" data-provinces="[]">
                Ilhas Pitcairn
              </option>
              <option value="Solomon Islands" data-provinces="[]">
                Ilhas Salomão
              </option>
              <option value="Turks and Caicos Islands" data-provinces="[]">
                Ilhas Turcas e Caicos
              </option>
              <option value="Virgin Islands, British" data-provinces="[]">
                Ilhas Virgens Britânicas
              </option>
              <option
                value="India"
                data-provinces='[["Andaman and Nicobar Islands","Andamão e Nicobar"],["Andhra Pradesh","Andhra Pradesh"],["Arunachal Pradesh","Arunachal Pradesh"],["Assam","Assam"],["Bihar","Bihar"],["Chandigarh","Chandigarh"],["Chhattisgarh","Chhattisgarh"],["Dadra and Nagar Haveli","Dadrá e Nagar-Aveli"],["Daman and Diu","Damão e Diu"],["Delhi","Deli"],["Goa","Goa"],["Gujarat","Gujarate"],["Haryana","Haryana"],["Himachal Pradesh","Himachal Pradesh"],["Jammu and Kashmir","Jammu e Caxemira"],["Jharkhand","Jharkhand"],["Karnataka","Karnataka"],["Kerala","Kerala"],["Ladakh","Ladakh"],["Lakshadweep","Laquedivas"],["Madhya Pradesh","Madhya Pradesh"],["Maharashtra","Maharashtra"],["Manipur","Manipur"],["Meghalaya","Meghalaya"],["Mizoram","Mizoram"],["Nagaland","Nagaland"],["Odisha","Odisha"],["Puducherry","Puducherry"],["Punjab","Punjab"],["Rajasthan","Rajastão"],["Sikkim","Siquim"],["Tamil Nadu","Tamil Nadu"],["Telangana","Telangana"],["Tripura","Tripura"],["Uttar Pradesh","Uttar Pradesh"],["Uttarakhand","Uttarakhand"],["West Bengal","Bengala Ocidental"]]'
              >
                Índia
              </option>
              <option
                value="Indonesia"
                data-provinces='[["Aceh","Achém"],["Bali","Bali"],["Bangka Belitung","Bangka-Belitung"],["Banten","Banten"],["Bengkulu","Bengkulu"],["Gorontalo","Gorontalo"],["Jakarta","Jacarta"],["Jambi","Jambi"],["Jawa Barat","Java Ocidental"],["Jawa Tengah","Java Central"],["Jawa Timur","Java Oriental"],["Kalimantan Barat","Kalimantan Ocidental"],["Kalimantan Selatan","Kalimantan do Sul"],["Kalimantan Tengah","Kalimantan Central"],["Kalimantan Timur","Kalimantan Oriental"],["Kalimantan Utara","Kalimantan Setentrional"],["Kepulauan Riau","Ilhas Riau"],["Lampung","Lampung"],["Maluku","Molucas (província)"],["Maluku Utara","Molucas do Norte"],["North Sumatra","Sumatra do Norte"],["Nusa Tenggara Barat","Sonda Ocidental"],["Nusa Tenggara Timur","Sonda Oriental"],["Papua","Papua"],["Papua Barat","Papua Ocidental"],["Riau","Riau"],["South Sumatra","Sumatra do Sul"],["Sulawesi Barat","Celebes Ocidental"],["Sulawesi Selatan","Celebes do Sul"],["Sulawesi Tengah","Celebes Central"],["Sulawesi Tenggara","Celebes do Sudeste"],["Sulawesi Utara","Celebes do Norte"],["West Sumatra","Sumatra Ocidental"],["Yogyakarta","Yogyakarta"]]'
              >
                Indonésia
              </option>
              <option value="Iraq" data-provinces="[]">
                Iraque
              </option>
              <option
                value="Ireland"
                data-provinces='[["Carlow","Condado de Carlow"],["Cavan","Condado de Cavan"],["Clare","Condado de Clare"],["Cork","Condado de Cork"],["Donegal","Condado de Donegal"],["Dublin","Condado de Dublin"],["Galway","Condado de Galway"],["Kerry","Condado de Kerry"],["Kildare","Condado de Kildare"],["Kilkenny","Condado de Kilkenny"],["Laois","Condado de Laois"],["Leitrim","Condado de Leitrim"],["Limerick","Condado de Limerick"],["Longford","Condado de Longford"],["Louth","Condado de Louth"],["Mayo","Condado de Mayo"],["Meath","Condado de Meath"],["Monaghan","Condado de Monaghan"],["Offaly","Condado de Offaly"],["Roscommon","Condado de Roscommon"],["Sligo","Condado de Sligo"],["Tipperary","Condado de Tipperary"],["Waterford","Condado de Waterford"],["Westmeath","Condado de Westmeath"],["Wexford","Condado de Wexford"],["Wicklow","Condado de Wicklow"]]'
              >
                Irlanda
              </option>
              <option value="Iceland" data-provinces="[]">
                Islândia
              </option>
              <option value="Israel" data-provinces="[]">
                Israel
              </option>
              <option
                value="Italy"
                data-provinces='[["Agrigento","Agrigento"],["Alessandria","Alexandria (província)"],["Ancona","Ancona"],["Aosta","Vale de Aosta"],["Arezzo","Arezzo"],["Ascoli Piceno","Ascoli Piceno"],["Asti","Asti"],["Avellino","Avellino"],["Bari","Bari"],["Barletta-Andria-Trani","Barletta-Andria-Trani"],["Belluno","Belluno"],["Benevento","Benevento"],["Bergamo","Bérgamo"],["Biella","Biella"],["Bologna","Bolonha"],["Bolzano","Província autónoma de Bolzano"],["Brescia","Bréscia"],["Brindisi","Brindisi"],["Cagliari","Cagliari"],["Caltanissetta","Caltanissetta"],["Campobasso","Campobasso"],["Carbonia-Iglesias","Carbonia-Iglesias"],["Caserta","Caserta"],["Catania","Catânia"],["Catanzaro","Catanzaro"],["Chieti","Chieti"],["Como","Como"],["Cosenza","Cosenza"],["Cremona","Cremona"],["Crotone","Crotone"],["Cuneo","Cuneo"],["Enna","Enna"],["Fermo","Fermo"],["Ferrara","Ferrara"],["Firenze","Florença"],["Foggia","Foggia"],["Forlì-Cesena","Forlì-Cesena"],["Frosinone","Frosinone"],["Genova","Cidade Metropolitana de Genoa"],["Gorizia","Gorizia"],["Grosseto","Grosseto"],["Imperia","Impéria"],["Isernia","Isérnia"],["L&apos;Aquila","Áquila"],["La Spezia","Spezia"],["Latina","Latina"],["Lecce","Lecce"],["Lecco","Lecco"],["Livorno","Livorno"],["Lodi","Lodi"],["Lucca","Lucca"],["Macerata","Macerata"],["Mantova","Mântua (província)"],["Massa-Carrara","Massa-Carrara"],["Matera","Matera"],["Medio Campidano","Medio Campidano"],["Messina","Messina"],["Milano","Milão"],["Modena","Módena"],["Monza e Brianza","Província de Monza e Brianza"],["Napoli","Nápoles"],["Novara","Novara"],["Nuoro","Nuoro"],["Ogliastra","Ogliastra"],["Olbia-Tempio","Olbia-Tempio"],["Oristano","Oristano"],["Padova","Pádua"],["Palermo","Palermo"],["Parma","Parma"],["Pavia","Pavia"],["Perugia","Perúgia"],["Pesaro e Urbino","Pesaro e Urbino"],["Pescara","Pescara"],["Piacenza","Placência"],["Pisa","Pisa"],["Pistoia","Pistoia"],["Pordenone","Pordenone"],["Potenza","Potenza"],["Prato","Prato"],["Ragusa","Ragusa"],["Ravenna","Ravena"],["Reggio Calabria","Reggio Calabria"],["Reggio Emilia","Reggio Emilia"],["Rieti","Rieti"],["Rimini","Rimini"],["Roma","Roma"],["Rovigo","Rovigo"],["Salerno","Salerno"],["Sassari","Sassari"],["Savona","Savona"],["Siena","Siena"],["Siracusa","Siracusa"],["Sondrio","Sondrio"],["Taranto","Taranto"],["Teramo","Téramo"],["Terni","Terni"],["Torino","Turim"],["Trapani","Trapani"],["Trento","Província autónoma de Trento"],["Treviso","Treviso"],["Trieste","Trieste"],["Udine","Udine"],["Varese","Varese"],["Venezia","Veneza"],["Verbano-Cusio-Ossola","Verbano Cusio Ossola"],["Vercelli","Vercelli"],["Verona","Verona"],["Vibo Valentia","Vibo Valentia"],["Vicenza","Vicenza"],["Viterbo","Viterbo"]]'
              >
                Itália
              </option>
              <option value="Jamaica" data-provinces="[]">
                Jamaica
              </option>
              <option
                value="Japan"
                data-provinces='[["Aichi","Aichi"],["Akita","Akita"],["Aomori","Aomori"],["Chiba","Chiba"],["Ehime","Ehime"],["Fukui","Fukui"],["Fukuoka","Fukuoka"],["Fukushima","Fukushima"],["Gifu","Gifu"],["Gunma","Gunma"],["Hiroshima","Província de Hiroshima"],["Hokkaidō","Hokkaido"],["Hyōgo","Hyōgo"],["Ibaraki","Ibaraki"],["Ishikawa","Ishikawa"],["Iwate","Iwate"],["Kagawa","Kagawa"],["Kagoshima","Kagoshima"],["Kanagawa","Kanagawa"],["Kumamoto","Kumamoto"],["Kyōto","Quioto"],["Kōchi","Kochi"],["Mie","Mie"],["Miyagi","Miyagi"],["Miyazaki","Miyazaki"],["Nagano","Nagano"],["Nagasaki","Nagasaki"],["Nara","Nara"],["Niigata","Niigata"],["Okayama","Okayama"],["Okinawa","Okinawa"],["Saga","Saga"],["Saitama","Saitama"],["Shiga","Shiga"],["Shimane","Shimane"],["Shizuoka","Shizuoka"],["Tochigi","Tochigi"],["Tokushima","Tokushima"],["Tottori","Tottori"],["Toyama","Toyama"],["Tōkyō","Tóquio"],["Wakayama","Wakayama"],["Yamagata","Yamagata"],["Yamaguchi","Yamaguchi"],["Yamanashi","Yamanashi"],["Ōita","Oita"],["Ōsaka","Osaka"]]'
              >
                Japão
              </option>
              <option value="Jersey" data-provinces="[]">
                Jersey
              </option>
              <option value="Jordan" data-provinces="[]">
                Jordânia
              </option>
              <option value="Kosovo" data-provinces="[]">
                Kosovo
              </option>
              <option
                value="Kuwait"
                data-provinces='[["Al Ahmadi","Al Ahmadi (província)"],["Al Asimah","Al Asimah"],["Al Farwaniyah","Al Farwaniyah"],["Al Jahra","Al Jahra"],["Hawalli","Hawalli"],["Mubarak Al-Kabeer","Mubarak Al-Kabeer"]]'
              >
                Kuwait
              </option>
              <option
                value="Lao People's Democratic Republic"
                data-provinces="[]"
              >
                Laos
              </option>
              <option value="Lesotho" data-provinces="[]">
                Lesoto
              </option>
              <option value="Latvia" data-provinces="[]">
                Letônia
              </option>
              <option value="Lebanon" data-provinces="[]">
                Líbano
              </option>
              <option value="Liberia" data-provinces="[]">
                Libéria
              </option>
              <option value="Libyan Arab Jamahiriya" data-provinces="[]">
                Líbia
              </option>
              <option value="Liechtenstein" data-provinces="[]">
                Liechtenstein
              </option>
              <option value="Lithuania" data-provinces="[]">
                Lituânia
              </option>
              <option value="Luxembourg" data-provinces="[]">
                Luxemburgo
              </option>
              <option value="Macao" data-provinces="[]">
                Macau, RAE da China
              </option>
              <option value="North Macedonia" data-provinces="[]">
                Macedônia do Norte
              </option>
              <option value="Madagascar" data-provinces="[]">
                Madagascar
              </option>
              <option
                value="Malaysia"
                data-provinces='[["Johor","Johor"],["Kedah","Quedá"],["Kelantan","Kelantan"],["Kuala Lumpur","Kuala Lumpur"],["Labuan","Labuan"],["Melaka","Malaca"],["Negeri Sembilan","Negeri Sembilan"],["Pahang","Pahang"],["Penang","Penang"],["Perak","Perak"],["Perlis","Perlis"],["Putrajaya","Putrajaya"],["Sabah","Sabá"],["Sarawak","Sarawak"],["Selangor","Selangor"],["Terengganu","Terengganu"]]'
              >
                Malásia
              </option>
              <option value="Malawi" data-provinces="[]">
                Malaui
              </option>
              <option value="Maldives" data-provinces="[]">
                Maldivas
              </option>
              <option value="Mali" data-provinces="[]">
                Mali
              </option>
              <option value="Malta" data-provinces="[]">
                Malta
              </option>
              <option value="Morocco" data-provinces="[]">
                Marrocos
              </option>
              <option value="Martinique" data-provinces="[]">
                Martinica
              </option>
              <option value="Mauritius" data-provinces="[]">
                Maurício
              </option>
              <option value="Mauritania" data-provinces="[]">
                Mauritânia
              </option>
              <option value="Mayotte" data-provinces="[]">
                Mayotte
              </option>
              <option
                value="Mexico"
                data-provinces='[["Aguascalientes","Aguascalientes"],["Baja California","Baja California"],["Baja California Sur","Baja California Sur"],["Campeche","Campeche"],["Chiapas","Chiapas"],["Chihuahua","Chihuahua"],["Ciudad de México","Cidade do México"],["Coahuila","Coahuila de Zaragoza"],["Colima","Colima"],["Durango","Durango"],["Guanajuato","Guanajuato"],["Guerrero","Guerrero"],["Hidalgo","Hidalgo"],["Jalisco","Jalisco"],["Michoacán","Michoacán"],["Morelos","Morelos"],["México","México"],["Nayarit","Nayarit"],["Nuevo León","Nuevo León"],["Oaxaca","Oaxaca"],["Puebla","Puebla"],["Querétaro","Querétaro"],["Quintana Roo","Quintana Roo"],["San Luis Potosí","San Luis Potosí"],["Sinaloa","Sinaloa"],["Sonora","Sonora"],["Tabasco","Tabasco"],["Tamaulipas","Tamaulipas"],["Tlaxcala","Tlaxcala"],["Veracruz","Veracruz"],["Yucatán","Iucatã"],["Zacatecas","Zacatecas"]]'
              >
                México
              </option>
              <option value="Myanmar" data-provinces="[]">
                Mianmar (Birmânia)
              </option>
              <option value="Mozambique" data-provinces="[]">
                Moçambique
              </option>
              <option value="Moldova, Republic of" data-provinces="[]">
                Moldávia
              </option>
              <option value="Monaco" data-provinces="[]">
                Mônaco
              </option>
              <option value="Mongolia" data-provinces="[]">
                Mongólia
              </option>
              <option value="Montenegro" data-provinces="[]">
                Montenegro
              </option>
              <option value="Montserrat" data-provinces="[]">
                Montserrat
              </option>
              <option value="Namibia" data-provinces="[]">
                Namíbia
              </option>
              <option value="Nauru" data-provinces="[]">
                Nauru
              </option>
              <option value="Nepal" data-provinces="[]">
                Nepal
              </option>
              <option value="Nicaragua" data-provinces="[]">
                Nicarágua
              </option>
              <option value="Niger" data-provinces="[]">
                Níger
              </option>
              <option
                value="Nigeria"
                data-provinces='[["Abia","Abia (estado)"],["Abuja Federal Capital Territory","Território da Capital Federal da Nigéria"],["Adamawa","Adamawa"],["Akwa Ibom","Akwa Ibom (estado)"],["Anambra","Anambra (estado)"],["Bauchi","Bauchi"],["Bayelsa","Bayelsa"],["Benue","Benue"],["Borno","Borno"],["Cross River","Cross River"],["Delta","Delta"],["Ebonyi","Ebonyi"],["Edo","Edo"],["Ekiti","Ekiti"],["Enugu","Enugu"],["Gombe","Gombe"],["Imo","Imo"],["Jigawa","Jigawa"],["Kaduna","Kaduna"],["Kano","Kano"],["Katsina","Katsina"],["Kebbi","Kebbi"],["Kogi","Kogi"],["Kwara","Kwara"],["Lagos","Lagos"],["Nasarawa","Nasarawa"],["Niger","Níger"],["Ogun","Ogun"],["Ondo","Ondo"],["Osun","Osun"],["Oyo","Oyo"],["Plateau","Plateau"],["Rivers","Rivers"],["Sokoto","Sokoto"],["Taraba","Taraba"],["Yobe","Yobe"],["Zamfara","Zamfara (estado)"]]'
              >
                Nigéria
              </option>
              <option value="Niue" data-provinces="[]">
                Niue
              </option>
              <option value="Norway" data-provinces="[]">
                Noruega
              </option>
              <option value="New Caledonia" data-provinces="[]">
                Nova Caledônia
              </option>
              <option
                value="New Zealand"
                data-provinces='[["Auckland","Auckland"],["Bay of Plenty","Região da Baia de Plenty"],["Canterbury","Canterbury"],["Chatham Islands","Ilhas Chatham"],["Gisborne","Gisborne"],["Hawke&apos;s Bay","Hawke’s Bay"],["Manawatu-Wanganui","Manawatu-Wanganui"],["Marlborough","Região de Marborough"],["Nelson","Nelson"],["Northland","Northland"],["Otago","Otago"],["Southland","Southland"],["Taranaki","Taranaki"],["Tasman","Tasman"],["Waikato","Waikato"],["Wellington","Wellington"],["West Coast","Costa Oeste"]]'
              >
                Nova Zelândia
              </option>
              <option value="Oman" data-provinces="[]">
                Omã
              </option>
              <option value="Netherlands" data-provinces="[]">
                Países Baixos
              </option>
              <option value="Caribbean Netherlands" data-provinces="[]">
                Países Baixos Caribenhos
              </option>
              <option
                value="Panama"
                data-provinces='[["Bocas del Toro","Bocas del Toro"],["Chiriquí","Chiriquí"],["Coclé","Coclé"],["Colón","Colón"],["Darién","Darién"],["Emberá","Emberá"],["Herrera","Herrera"],["Kuna Yala","Kuna Yala"],["Los Santos","Los Santos"],["Ngöbe-Buglé","Ngöbe-Buglé"],["Panamá","Panamá"],["Panamá Oeste","West Panamá"],["Veraguas","Veraguas"]]'
              >
                Panamá
              </option>
              <option value="Papua New Guinea" data-provinces="[]">
                Papua-Nova Guiné
              </option>
              <option value="Pakistan" data-provinces="[]">
                Paquistão
              </option>
              <option value="Paraguay" data-provinces="[]">
                Paraguai
              </option>
              <option
                value="Peru"
                data-provinces='[["Amazonas","Amazonas"],["Apurímac","Apurímac"],["Arequipa","Arequipa"],["Ayacucho","Ayacucho"],["Cajamarca","Cajamarca"],["Callao","Callao"],["Cuzco","Cusco"],["Huancavelica","Huancavelica"],["Huánuco","Huánuco"],["Ica","Ica"],["Junín","Junín"],["La Libertad","Liberdade"],["Lambayeque","Lambayeque"],["Lima (departamento)","Lima"],["Lima (provincia)","Lima²"],["Loreto","Loreto"],["Madre de Dios","Madre de Deus (região)"],["Moquegua","Moquegua"],["Pasco","Pasco"],["Piura","Piura"],["Puno","Puno"],["San Martín","San Martín"],["Tacna","Tacna"],["Tumbes","Tumbes"],["Ucayali","Ucayali"],["Áncash","Ancash"]]'
              >
                Peru
              </option>
              <option value="French Polynesia" data-provinces="[]">
                Polinésia Francesa
              </option>
              <option value="Poland" data-provinces="[]">
                Polônia
              </option>
              <option
                value="Portugal"
                data-provinces='[["Aveiro","Aveiro"],["Açores","Açores"],["Beja","Beja"],["Braga","Braga"],["Bragança","Bragança"],["Castelo Branco","Castelo Branco"],["Coimbra","Coimbra"],["Faro","Faro"],["Guarda","Guarda"],["Leiria","Leiria"],["Lisboa","Lisboa"],["Madeira","Madeira"],["Portalegre","Portalegre"],["Porto","Porto"],["Santarém","Santarém"],["Setúbal","Setúbal"],["Viana do Castelo","Viana do Castelo"],["Vila Real","Vila Real"],["Viseu","Viseu"],["Évora","Évora"]]'
              >
                Portugal
              </option>
              <option value="Kenya" data-provinces="[]">
                Quênia
              </option>
              <option value="Kyrgyzstan" data-provinces="[]">
                Quirguistão
              </option>
              <option value="Kiribati" data-provinces="[]">
                Quiribati
              </option>
              <option
                value="United Kingdom"
                data-provinces='[["British Forces","Forças Armadas Britânicas"],["England","Inglaterra"],["Northern Ireland","Irlanda do Norte"],["Scotland","Escócia"],["Wales","País de Gales"]]'
              >
                Reino Unido
              </option>
              <option value="Central African Republic" data-provinces="[]">
                República Centro-Africana
              </option>
              <option value="Dominican Republic" data-provinces="[]">
                República Dominicana
              </option>
              <option value="Congo" data-provinces="[]">
                República do Congo
              </option>
              <option value="Reunion" data-provinces="[]">
                Reunião
              </option>
              <option
                value="Romania"
                data-provinces='[["Alba","Alba"],["Arad","Arad"],["Argeș","Argeş"],["Bacău","Bacău"],["Bihor","Bihor"],["Bistrița-Năsăud","Bistrița-Năsăud"],["Botoșani","Botoşani"],["Brașov","Brașov"],["Brăila","Brăila"],["București","Bucareste"],["Buzău","Buzău"],["Caraș-Severin","Caraş-Severin"],["Cluj","Cluj"],["Constanța","Constanţa"],["Covasna","Covasna"],["Călărași","Călăraşi"],["Dolj","Dolj"],["Dâmbovița","Dâmboviţa"],["Galați","Galaţi"],["Giurgiu","Giurgiu"],["Gorj","Gorj"],["Harghita","Harghita"],["Hunedoara","Hunedoara"],["Ialomița","Ialomiţa"],["Iași","Iaşi"],["Ilfov","Ilfov"],["Maramureș","Maramureș"],["Mehedinți","Mehedinţi"],["Mureș","Mureș"],["Neamț","Neamţ"],["Olt","Olt"],["Prahova","Prahova"],["Satu Mare","Satu Mare"],["Sibiu","Sibiu"],["Suceava","Suceava"],["Sălaj","Sălaj"],["Teleorman","Teleorman"],["Timiș","Timiş"],["Tulcea","Tulcea"],["Vaslui","Vaslui"],["Vrancea","Vrancea"],["Vâlcea","Vâlcea"]]'
              >
                Romênia
              </option>
              <option value="Rwanda" data-provinces="[]">
                Ruanda
              </option>
              <option
                value="Russia"
                data-provinces='[["Altai Krai","Krai de Altai"],["Altai Republic","Altai (república)"],["Amur Oblast","Oblast de Amur"],["Arkhangelsk Oblast","Oblast de Arkhangelsk"],["Astrakhan Oblast","Oblast de Astracã"],["Belgorod Oblast","Oblast de Belgorod"],["Bryansk Oblast","Oblast de Briansk"],["Chechen Republic","Chechênia"],["Chelyabinsk Oblast","Oblast de Cheliabinsk"],["Chukotka Autonomous Okrug","Chukotka"],["Chuvash Republic","Chuváchia"],["Irkutsk Oblast","Oblast de Irkutsk"],["Ivanovo Oblast","Oblast de Ivanovo"],["Jewish Autonomous Oblast","Oblast Autônomo Judaico"],["Kabardino-Balkarian Republic","Cabárdia-Balcária"],["Kaliningrad Oblast","Oblast de Kaliningrado"],["Kaluga Oblast","Oblast de Kaluga"],["Kamchatka Krai","Krai de Kamtchatka"],["Karachay–Cherkess Republic","Carachai-Circássia"],["Kemerovo Oblast","Oblast de Kemerovo"],["Khabarovsk Krai","Krai de Khabarovsk"],["Khanty-Mansi Autonomous Okrug","Khantia-Mansia"],["Kirov Oblast","Oblast de Kirov"],["Komi Republic","República de Komi"],["Kostroma Oblast","Oblast de Kostroma"],["Krasnodar Krai","Krai de Krasnodar"],["Krasnoyarsk Krai","Krai de Krasnoiarsk"],["Kurgan Oblast","Oblast de Kurgan"],["Kursk Oblast","Oblast de Kursk"],["Leningrad Oblast","Oblast de Leningrado"],["Lipetsk Oblast","Oblast de Lipetsk"],["Magadan Oblast","Oblast de Magadan"],["Mari El Republic","Mari El"],["Moscow","Moscovo"],["Moscow Oblast","Oblast de Moscou"],["Murmansk Oblast","Oblast de Murmansk"],["Nizhny Novgorod Oblast","Oblast de Níjni Novgorod"],["Novgorod Oblast","Oblast de Novgorod"],["Novosibirsk Oblast","Oblast de Novosibirsk"],["Omsk Oblast","Oblast de Omsk"],["Orenburg Oblast","Oblast de Oremburgo"],["Oryol Oblast","Oblast de Oriol"],["Penza Oblast","Oblast de Penza"],["Perm Krai","Krai de Perm"],["Primorsky Krai","Krai do Litoral"],["Pskov Oblast","Oblast de Pskov"],["Republic of Adygeya","Adiguésia"],["Republic of Bashkortostan","Bascortostão"],["Republic of Buryatia","Buriácia"],["Republic of Dagestan","Daguestão"],["Republic of Ingushetia","Inguchétia"],["Republic of Kalmykia","Calmúquia"],["Republic of Karelia","República da Carélia"],["Republic of Khakassia","Cacássia"],["Republic of Mordovia","Mordóvia"],["Republic of North Ossetia–Alania","Ossétia do Norte-Alânia"],["Republic of Tatarstan","Tartaristão"],["Rostov Oblast","Oblast de Rostov"],["Ryazan Oblast","Oblast de Riazan"],["Saint Petersburg","São Petersburgo"],["Sakha Republic (Yakutia)","Iacútia"],["Sakhalin Oblast","Oblast de Sacalina"],["Samara Oblast","Oblast de Samara"],["Saratov Oblast","Oblast de Saratov"],["Smolensk Oblast","Oblast de Smolensk"],["Stavropol Krai","Krai de Stavropol"],["Sverdlovsk Oblast","Oblast de Sverdlovsk"],["Tambov Oblast","Oblast de Tambov"],["Tomsk Oblast","Oblast de Tomsk"],["Tula Oblast","Oblast de Tula"],["Tver Oblast","Oblast de Tver"],["Tyumen Oblast","Oblast de Tiumen"],["Tyva Republic","Tuva"],["Udmurtia","Udmúrtia"],["Ulyanovsk Oblast","Oblast de Ulianovsk"],["Vladimir Oblast","Oblast de Vladimir"],["Volgograd Oblast","Oblast de Volgogrado"],["Vologda Oblast","Oblast de Vologda"],["Voronezh Oblast","Oblast de Voronej"],["Yamalo-Nenets Autonomous Okrug","Iamália"],["Yaroslavl Oblast","Oblast de Iaroslavl"],["Zabaykalsky Krai","Krai de Zabaykalsky"]]'
              >
                Rússia
              </option>
              <option value="Western Sahara" data-provinces="[]">
                Saara Ocidental
              </option>
              <option value="Samoa" data-provinces="[]">
                Samoa
              </option>
              <option value="San Marino" data-provinces="[]">
                San Marino
              </option>
              <option value="Saint Helena" data-provinces="[]">
                Santa Helena
              </option>
              <option value="Saint Lucia" data-provinces="[]">
                Santa Lúcia
              </option>
              <option value="Saint Barthélemy" data-provinces="[]">
                São Bartolomeu
              </option>
              <option value="Saint Kitts And Nevis" data-provinces="[]">
                São Cristóvão e Névis
              </option>
              <option value="Saint Martin" data-provinces="[]">
                São Martinho
              </option>
              <option value="Saint Pierre And Miquelon" data-provinces="[]">
                São Pedro e Miquelão
              </option>
              <option value="Sao Tome And Principe" data-provinces="[]">
                São Tomé e Príncipe
              </option>
              <option value="St. Vincent" data-provinces="[]">
                São Vicente e Granadinas
              </option>
              <option value="Seychelles" data-provinces="[]">
                Seicheles
              </option>
              <option value="Senegal" data-provinces="[]">
                Senegal
              </option>
              <option value="Sierra Leone" data-provinces="[]">
                Serra Leoa
              </option>
              <option value="Serbia" data-provinces="[]">
                Sérvia
              </option>
              <option value="Singapore" data-provinces="[]">
                Singapura
              </option>
              <option value="Sint Maarten" data-provinces="[]">
                Sint Maarten
              </option>
              <option value="Somalia" data-provinces="[]">
                Somália
              </option>
              <option value="Sri Lanka" data-provinces="[]">
                Sri Lanka
              </option>
              <option value="Sudan" data-provinces="[]">
                Sudão
              </option>
              <option value="South Sudan" data-provinces="[]">
                Sudão do Sul
              </option>
              <option value="Sweden" data-provinces="[]">
                Suécia
              </option>
              <option value="Switzerland" data-provinces="[]">
                Suíça
              </option>
              <option value="Suriname" data-provinces="[]">
                Suriname
              </option>
              <option value="Svalbard And Jan Mayen" data-provinces="[]">
                Svalbard e Jan Mayen
              </option>
              <option value="Tajikistan" data-provinces="[]">
                Tadjiquistão
              </option>
              <option
                value="Thailand"
                data-provinces='[["Amnat Charoen","Amnat Charoen"],["Ang Thong","Ang Thong"],["Bangkok","Banguecoque"],["Bueng Kan","Bungkan"],["Buriram","Buri Ram"],["Chachoengsao","Chachoengsao"],["Chai Nat","Chai Nat"],["Chaiyaphum","Chaiyaphum"],["Chanthaburi","Chanthaburi"],["Chiang Mai","Chiang Mai"],["Chiang Rai","Chiang Rai"],["Chon Buri","Chon Buri"],["Chumphon","Chumphon"],["Kalasin","Kalasin"],["Kamphaeng Phet","Kamphaeng Phet"],["Kanchanaburi","Kanchanaburi"],["Khon Kaen","Khon Kaen"],["Krabi","Krabi"],["Lampang","Lampang"],["Lamphun","Lamphun"],["Loei","Loei"],["Lopburi","Lop Buri"],["Mae Hong Son","Mae Hong Son"],["Maha Sarakham","Maha Sarakham"],["Mukdahan","Mukdahan"],["Nakhon Nayok","Nakhon Nayok"],["Nakhon Pathom","Nakhon Pathom"],["Nakhon Phanom","Nakhon Phanom"],["Nakhon Ratchasima","Nakhon Ratchasima"],["Nakhon Sawan","Nakhon Sawan"],["Nakhon Si Thammarat","Província de Nakhon Si Thammarat"],["Nan","Nan"],["Narathiwat","Narathiwat"],["Nong Bua Lam Phu","Nong Bua Lam Phu"],["Nong Khai","Nong Khai"],["Nonthaburi","Nonthaburi"],["Pathum Thani","Pathum Thani"],["Pattani","Pattani"],["Pattaya","Pattaya"],["Phangnga","Phangnga"],["Phatthalung","Phatthalung"],["Phayao","Phayao"],["Phetchabun","Phetchabun"],["Phetchaburi","Phetchaburi"],["Phichit","Phichit"],["Phitsanulok","Phitsanulok"],["Phra Nakhon Si Ayutthaya","Phra Nakhon Si Ayutthaya"],["Phrae","Phrae"],["Phuket","Phuket"],["Prachin Buri","Prachin Buri"],["Prachuap Khiri Khan","Prachuap Khiri Khan"],["Ranong","Ranong"],["Ratchaburi","Ratchaburi"],["Rayong","Rayong"],["Roi Et","Roi Et"],["Sa Kaeo","Sa Kaeo"],["Sakon Nakhon","Sakon Nakhon"],["Samut Prakan","Samut Prakan"],["Samut Sakhon","Samut Sakhon"],["Samut Songkhram","Samut Songkhram"],["Saraburi","Saraburi"],["Satun","Satun"],["Sing Buri","Sing Buri"],["Sisaket","Si Sa Ket"],["Songkhla","Songkhla"],["Sukhothai","Sukhothai"],["Suphan Buri","Suphan Buri"],["Surat Thani","Surat Thani"],["Surin","Surin"],["Tak","Tak"],["Trang","Trang"],["Trat","Trat"],["Ubon Ratchathani","Ubon Ratchathani"],["Udon Thani","Udon Thani"],["Uthai Thani","Uthai Thani"],["Uttaradit","Uttaradit"],["Yala","Yala"],["Yasothon","Yasothon"]]'
              >
                Tailândia
              </option>
              <option value="Taiwan" data-provinces="[]">
                Taiwan
              </option>
              <option value="Tanzania, United Republic Of" data-provinces="[]">
                Tanzânia
              </option>
              <option value="Czech Republic" data-provinces="[]">
                Tchéquia
              </option>
              <option
                value="British Indian Ocean Territory"
                data-provinces="[]"
              >
                Território Britânico do Oceano Índico
              </option>
              <option value="French Southern Territories" data-provinces="[]">
                Territórios Franceses do Sul
              </option>
              <option
                value="Palestinian Territory, Occupied"
                data-provinces="[]"
              >
                Territórios palestinos
              </option>
              <option value="Timor Leste" data-provinces="[]">
                Timor-Leste
              </option>
              <option value="Togo" data-provinces="[]">
                Togo
              </option>
              <option value="Tokelau" data-provinces="[]">
                Tokelau
              </option>
              <option value="Tonga" data-provinces="[]">
                Tonga
              </option>
              <option value="Trinidad and Tobago" data-provinces="[]">
                Trinidad e Tobago
              </option>
              <option value="Tristan da Cunha" data-provinces="[]">
                Tristão da Cunha
              </option>
              <option value="Tunisia" data-provinces="[]">
                Tunísia
              </option>
              <option value="Turkmenistan" data-provinces="[]">
                Turcomenistão
              </option>
              <option value="Turkey" data-provinces="[]">
                Turquia
              </option>
              <option value="Tuvalu" data-provinces="[]">
                Tuvalu
              </option>
              <option value="Ukraine" data-provinces="[]">
                Ucrânia
              </option>
              <option value="Uganda" data-provinces="[]">
                Uganda
              </option>
              <option
                value="Uruguay"
                data-provinces='[["Artigas","Artigas"],["Canelones","Canelones"],["Cerro Largo","Cerro Largo"],["Colonia","Colonia"],["Durazno","Durazno (departamento)"],["Flores","Flores"],["Florida","Florida"],["Lavalleja","Lavalleja"],["Maldonado","Maldonado (departamento)"],["Montevideo","Montevidéu"],["Paysandú","Paysandú"],["Rivera","Rivera"],["Rocha","Rocha"],["Río Negro","Río Negro"],["Salto","Salto"],["San José","San José"],["Soriano","Soriano"],["Tacuarembó","Tacuarembó"],["Treinta y Tres","Treinta y Tres"]]'
              >
                Uruguai
              </option>
              <option value="Uzbekistan" data-provinces="[]">
                Uzbequistão
              </option>
              <option value="Vanuatu" data-provinces="[]">
                Vanuatu
              </option>
              <option
                value="Venezuela"
                data-provinces='[["Amazonas","Amazonas"],["Anzoátegui","Anzoátegui"],["Apure","Apure"],["Aragua","Aragua"],["Barinas","Barinas"],["Bolívar","Bolívar"],["Carabobo","Carabobo"],["Cojedes","Cojedes"],["Delta Amacuro","Delta Amacuro"],["Dependencias Federales","Dependências Federais da Venezuela"],["Distrito Capital","Distrito Capital"],["Falcón","Falcón"],["Guárico","Guárico"],["La Guaira","Vargas"],["Lara","Lara"],["Miranda","Miranda"],["Monagas","Monagas"],["Mérida","Mérida"],["Nueva Esparta","Nueva Esparta"],["Portuguesa","Portuguesa"],["Sucre","Sucre"],["Trujillo","Trujillo"],["Táchira","Táchira"],["Yaracuy","Yaracuy"],["Zulia","Zulia"]]'
              >
                Venezuela
              </option>
              <option value="Vietnam" data-provinces="[]">
                Vietnã
              </option>
              <option value="Wallis And Futuna" data-provinces="[]">
                Wallis e Futuna
              </option>
              <option value="Zambia" data-provinces="[]">
                Zâmbia
              </option>
              <option value="Zimbabwe" data-provinces="[]">
                Zimbábue
              </option>
            </select>
          </div>
          {provinces.length > 0 && (
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="address_province"
                className="text-[#444] text-base font-bold leading-normal"
              >
                Província
              </label>
              <select
                id="address_province"
                name="address_province"
                className="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
              >
                {provinces.map((province, index) => (
                  <option key={index} value={province}>
                    {province[1]}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div class="w-full flex flex-col gap-2">
            <label
              htmlFor="address_zip"
              class="text-[#444] text-base font-bold leading-normal"
            >
              CEP
            </label>
            <input
              id="address_zip"
              name="address_zip"
              class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
            />
          </div>
          <div class="w-full flex flex-col gap-2">
            <label
              htmlFor="address_phone"
              class="text-[#444] text-base font-bold leading-normal"
            >
              Telefone
            </label>
            <input
              id="address_phone"
              name="address_phone"
              class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
            />
          </div>
          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              id="address_default"
              name="address_default"
            />
            <label
              htmlFor="address_default"
              class="text-[#444] text-base font-bold leading-normal"
            >
              Definir como endereço-padrão
            </label>
          </div>
          <div class="flex items-center gap-4">
            <button class="bg-[#2E385F] w-full max-w-[186px] h-[35px] rounded-lg flex items-center justify-center text-white text-[13px] font-medium leading-normal">
              Atualizar endereço
            </button>
            <button class="bg-[#2E385F] w-full max-w-[186px] h-[35px] rounded-lg flex items-center justify-center text-white text-[13px] font-medium leading-normal">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </li>
  );
};

export default AddressCard;
