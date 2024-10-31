"use client";

import { T, useTranslate } from "@tolgee/react";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Back from "@modules/common/icons/back";
import FastDelivery from "@modules/common/icons/fast-delivery";
import Refresh from "@modules/common/icons/refresh";
import Accordion from "./accordion";

type ProductTabsProps = {
  product: PricedProduct;
};

const ProductTabs = ({ product }: ProductTabsProps) => {
  const { t } = useTranslate(); // Usamos el hook para obtener las traducciones

  const tabs = [
    {
      label: t("productTabs.productInfo", "Product Information"), // Usamos la función para obtener el texto traducido
      component: <ProductInfoTab product={product} />,
    },
    {
      label: t("productTabs.shippingReturns", "Shipping & Returns"),
      component: <ShippingInfoTab />,
    },
  ];

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label} // Ahora label es una string
            headingSize="large"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-lg py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">
              <T keyName="material">Material</T>
            </span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">
              <T keyName="country-origin">Country of origin</T>
            </span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">
              <T keyName="type">Type</T>
            </span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">
              <T keyName="weight">Weight</T>
            </span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">
              <T keyName="dimensions">Dimensions</T>
            </span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">
            <T keyName="productInfo.tags">Tags</T>
          </span>
        </div>
      ) : null}
    </div>
  );
};

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold text-lg">
              <T keyName="fast-delivery" />
            </span>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold text-lg">
              <T keyName="simple-exchanges" />
            </span>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold text-lg">
              <T keyName="easy-returns" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoTab;
