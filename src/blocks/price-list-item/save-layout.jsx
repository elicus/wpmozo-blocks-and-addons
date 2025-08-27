import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function LayoutWrapper({ attributes }) {

  let {
    itemThumbnail,
    itemCurrency,
    itemPrice,
    itemThumbnailOption,
    iconShape,
    pricePeriod,
    itemName,
    icon,
    content,
    parentAtts,
    ID
  } = attributes;

  let thumbnail = null,
    price = null,
    currency = null,
    description = null;

  const iconElement = icon ? (
    <div className="icon-wrapper">
      <i className={icon}></i>
    </div>
  ) : null;

  let itmeHeadingTag = attributes.nameHeadingLavel,
      parentHeadingLavel = parentAtts.nameHeadingLavel,
      HeadingTag = ( 'h4' !== itmeHeadingTag ) ? itmeHeadingTag : parentHeadingLavel;

  const title = (
    <RichText.Content
      className="wpmozo-bna-price-list-item-name"
      tagName={HeadingTag}
      value={attributes.itemName}
    />
  );

  if (itemThumbnail && itemThumbnailOption === "use_image") {
    thumbnail = <img src={itemThumbnail} alt="" />;
  }

  if (iconElement && itemThumbnailOption === "use_icon") {
    thumbnail = (
      <span className={`wpmozo-bna-price-list-icon ${iconShape}`}>
        {iconElement}
      </span>
    );
  }

  if (itemPrice) {
    price = <span className="wpmozo-bna-price-list-item-price">{itemPrice}</span>;
  }

  if (itemCurrency) {
    currency = (
      <span className="wpmozo-bna-price-list-item-currency">{itemCurrency}</span>
    );
  }

  description = (
    <RichText.Content
      className="wpmozo-bna-price-list-item-description"
      tagName="div"
      value={attributes.content}
    />
  );
  
  return parentAtts.layout === "layout1"
    ? layout1(
        thumbnail,
        currency,
        price,
        pricePeriod,
        title,
        description,
        ID,
        itemThumbnailOption,
        iconShape
      )
    : layout2(
        thumbnail,
        currency,
        price,
        pricePeriod,
        title,
        description,
        ID,
        itemThumbnailOption,
        iconShape
      );
}

function layout1(
  thumbnail,
  currency,
  price,
  pricePeriod,
  title,
  description,
  address,
  itemThumbnailOption,
  iconShape
) {
  const noThumbnail = !thumbnail;
  const itemPriceWrap = [];
  const innerWrap = [];
  const itemNameWrap = [];

  if (thumbnail && itemThumbnailOption === "use_image") {
    innerWrap.push(
      <div
        className="wpmozo-bna-price-list-item-thumbnail"
        key={`${address}_layout1_thumb`}
      >
        {thumbnail}
      </div>
    );
  }

  if (thumbnail && itemThumbnailOption === "use_icon") {
    let iconThumb = thumbnail;
    if (iconShape === "hexagon") {
      iconThumb = (
        <div className="wpmozo-bna-icon-hexagon-wrapper">
          <div className="wpmozo-bna-icon-hexagon-inner-wrap">
            <div className="wpmozo-bna-icon-hexagon">{thumbnail}</div>
          </div>
        </div>
      );
    }
    innerWrap.push(
      <div
        className="wpmozo-bna-price-list-item-icon"
        key={`${address}_layout1_icon`}
      >
        {iconThumb}
      </div>
    );
  }

  if (price) {
    itemPriceWrap.push(
      <div
        className="wpmozo-bna-price-list-item-price-divider"
        key={`${address}_layout1_price_divider`}
      />
    );
    itemPriceWrap.push(
      <div
        className="wpmozo-bna-price-list-item-price-wrap"
        key={`${address}_layout1_price_wrapper`}
      >
        {currency}
        {price}
      </div>
    );
    if (pricePeriod) {
      itemPriceWrap.push(
        <div
          className="wpmozo-bna-price-list-item-price-period"
          key={`${address}_layout1_price_period`}
        >
          <span className="wpmozo-bna-price-period-divider">/</span>
          {pricePeriod}
        </div>
      );
    }
  }

  itemNameWrap.push(
    <div
      className="wpmozo-bna-price-list-item-name-wrap"
      key={`${address}_layout1_name_wrap`}
    >
      {title}
      {itemPriceWrap}
    </div>
  );

  innerWrap.push(
    <div
      className="wpmozo-bna-price-list-item-details"
      key={`${address}_layout1_desc`}
    >
      {itemNameWrap}
      {description}
    </div>
  );

  return (
    <div className="wpmozo-bna-price-list-layout wpmozo-bna-price-list-layout1" key={`${address}_layout1_item`}>
      <div className="wpmozo-bna-price-list-item-wrap">{innerWrap}</div>
    </div>
  );
}

function layout2(
  thumbnail,
  currency,
  price,
  pricePeriod,
  title,
  description,
  address,
  itemThumbnailOption,
  iconShape
) {
  const innerWrap = [];
  let noThumbnail = false;

  if (!thumbnail) {
    noThumbnail = true;
  }

  if (thumbnail && itemThumbnailOption === "use_image") {
    innerWrap.push(
      <div
        className="wpmozo-bna-price-list-item-thumbnail"
        key={`${address}_layout2_thumb`}
      >
        {thumbnail}
      </div>
    );
  }

  if (thumbnail && itemThumbnailOption === "use_icon") {
    let iconThumb = thumbnail;

    if (iconShape === "hexagon") {
      iconThumb = (
        <div className="wpmozo-bna-icon-hexagon-wrapper">
          <div className="wpmozo-bna-icon-hexagon-inner-wrap">
            <div className="wpmozo-bna-icon-hexagon">{thumbnail}</div>
          </div>
        </div>
      );
    }

    innerWrap.push(
      <div
        className="wpmozo-bna-price-list-item-icon"
        key={`${address}_layout2_icon`}
      >
        {iconThumb}
      </div>
    );
  }

  if (price) {
    let pricePeriodHtml = null;

    if (pricePeriod) {
      pricePeriodHtml = (
        <span className="wpmozo-bna-price-list-item-price-period">
          <span className="wpmozo-bna-price-period-divider">/</span>
          {pricePeriod}
        </span>
      );
    }

    innerWrap.push(
      <div
        className="wpmozo-bna-price-list-item-price-wrap"
        key={`${address}_layout2_price_wrap`}
      >
        {currency}
        {price}
        {pricePeriodHtml}
      </div>
    );
  }

  innerWrap.push(
    <div
      className="wpmozo-bna-price-list-item-name-wrap"
      key={`${address}_layout2_name_wrap`}
    >
      {title}
    </div>
  );

  if (description) {
    innerWrap.push(description);
  }

  return (
    <div className="wpmozo-bna-price-list-layout wpmozo-bna-price-list-layout2" key={`${address}_layout2_item`}>
      <div className="wpmozo-bna-price-list-item-wrap">{innerWrap}</div>
    </div>
  );
}

export default LayoutWrapper;
