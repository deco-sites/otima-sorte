const financialStatus = [
  {
    status: "authorized",
    value: "Autorizado",
  },
  {
    status: "paid",
    value: "Pago",
  },
  {
    status: "partially_paid",
    value: "Parcialmente pago",
  },
  {
    status: "partially_refunded",
    value: "Parcialmente reembolsado",
  },
  {
    status: "pending",
    value: "Pendente",
  },
  {
    status: "refunded",
    value: "Reembolsado",
  },
  {
    status: "voided",
    value: "Anulado",
  },
];

const fulfillmentStatus = [
  {
    status: "fulfilled",
    value: "Finalizado",
  },
  {
    status: "in_progress",
    value: "Em andamento",
  },
  {
    status: "on_hold",
    value: "Em espera",
  },
  {
    status: "open",
    value: "Aberto",
  },
  {
    status: "partially_fulfilled",
    value: "Parcialmente finalizado",
  },
  {
    status: "pending_fulfillment",
    value: "Finalização pendente",
  },
  {
    status: "restocked",
    value: "Reabastecido",
  },
  {
    status: "scheduled",
    value: "Agendado",
  },
  {
    status: "unfulfilled",
    value: "Não finalizado",
  },
];

// deno-lint-ignore no-explicit-any
const OrdersTable = ({ orders }: { orders: any }) => {
  return (
    <>
      <div class="lg:hidden">
        <div class="flex items-center gap-[10px] pb-[21px] border-b border-[#E5E5E5] mb-[15px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M7.58289 5.31909H18.9579"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.58289 10.5691H18.9579"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.58289 15.8191H18.9579"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.20789 5.31909H3.21736"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.20789 10.5691H3.21736"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.20789 15.8191H3.21736"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="text-[#686868] text-lg font-semibold leading-normal">
            Histórico de pedidos
          </p>
        </div>
        <div class="flex flex-col gap-5">
          {/* @ts-ignore */}
          {orders?.map((order) => (
            <div
              class="pb-5 border-b border-[#E5E5E5]"
              onClick={() => {
                location.href = `/my-account/${order.name.substring(1)}`;
              }}
            >
              <p class="text-[#2E385F] text-[15px] leading-normal underline mb-5">
                {order.name}
              </p>
              <div class="flex flex-col gap-[13px]">
                <p class="text-[#686868] text-sm leading-normal">
                  <span class="font-semibold">Data:</span>
                  {new Date(order.createdAt).toDateString()}
                </p>
                <p class="text-[#686868] text-sm leading-normal">
                  <span class="font-semibold">Status do pagamento:</span>
                  {financialStatus.find(
                    (status) => status.status === order.financial_status,
                  )?.value || order.financial_status}
                </p>
                <p class="text-[#686868] text-sm leading-normal">
                  <span class="font-semibold">Status do pedido:</span>
                  {fulfillmentStatus.find(
                    (status) => status.status === order.fulfillment_status,
                  )?.value || order.fulfillment_status}
                </p>
                <p class="text-[#686868] text-sm leading-normal">
                  <span class="font-semibold">Total:</span>
                  R$ {order.totalPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="w-full max-w-[930px] hidden lg:block">
        <div class="flex items-center gap-3 mb-[46px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M9.50488 6.93896H24.132"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.50488 13.6899H24.132"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.50488 20.4409H24.132"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.87891 6.93896H3.89109"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.87891 13.6899H3.89109"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.87891 20.4409H3.89109"
                stroke="#2E385F"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="text-[#686868] text-xl font-semibold leading-normal">
            Histórico de pedidos
          </p>
        </div>
        <table class="w-full">
          <tr class="w-full h-[66px] border-b border-[#E5E5E5] text-[#686868] text-base font-semibold leading-normal text-left">
            <th>Pedido</th>
            <th>Data</th>
            <th>Status do pagamento</th>
            <th>Status do pedido</th>
            <th>Total</th>
          </tr>
          {/* @ts-ignore */}
          {orders?.map((order) => {
            return (
              <tr
                class="w-full h-[66px] border-b border-[#E5E5E5] text-[#686868] text-[15px] leading-normal hover:bg-[#E5E5E5] cursor-pointer"
                onClick={() => {
                  location.href = `/my-account/${order.name.substring(1)}`;
                }}
              >
                <td class="text-[#2E385F] underline">{order.name}</td>
                <td>{new Date(order.createdAt).toDateString()}</td>
                <td>
                  {financialStatus.find(
                    (status) => status.status === order.financial_status,
                  )?.value || order.financial_status}
                </td>
                <td>
                  {fulfillmentStatus.find(
                    (status) => status.status === order.fulfillment_status,
                  )?.value || order.fulfillment_status}
                </td>
                <td>R$ {order.totalPrice}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default OrdersTable;
