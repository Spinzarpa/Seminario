"use client"; // Necesario para entornos de cliente

import { T } from "@tolgee/react"; // Importamos Tolgee
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Heading, Text } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { useRefreshPaymentSession } from "medusa-react";

type ProductInfoProps = {
  product: PricedProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  // Modificamos las claves para que coincidan con Tolgee
  const productNameKey = `product-name-{${product.id ?? "default"}}`;
  const productDescriptionKey = `product-description-{${product.id ?? "default"}}`;

  // Depuración: Imprimir las claves generadas
  console.log("Product Name Key:", productNameKey);
  console.log("Product Description Key:", productDescriptionKey);

  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}

        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base" data-testid="product-title">
          <T keyName={productNameKey} defaultValue={product.title ?? "No title available"} />
        </Heading>

        <Text className="text-medium text-ui-fg-subtle" data-testid="product-description">
          <T keyName={productDescriptionKey} defaultValue={product.description ?? "No description available"} />
        </Text>
      </div>
    </div>
  );
};

export default ProductInfo;
