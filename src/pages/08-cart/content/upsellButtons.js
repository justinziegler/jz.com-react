function UpsellButtons(props) {

	return (
		<div className='buttons row'>
      { props.u }
			{/* <div className='size-select col-xs-6'>
				<div className='dropdown'>
					<button 
						className='btn btn-sm btn-white dropdown-toggle' 
						type='button' 
						id={ `upsell-LU-${ type }-${ color }` }
						data-toggle='dropdown' 
						aria-haspopup='true' 
						aria-expanded='false' 
						tabIndex='0'
					>
						{ u.skus.map(item =>
							<div className='current-size' 
							data-sku={ item.sku }
							data-active={ active }
							data-color-selection={ u.colorSelection }
							data-active-color={ activeColor }
							data-longtitle={ u.dualSizes }>
								{ if u.dualSizes &&
									<>
										{(upsellSize == 'TW') && (item.size == 'TT') -%}
										Twin
									</>
									
									{%- elif (upsellSize == 'TX') and (item.size == 'TT') -%}
										Twin XL
									{%- elif (upsellSize == 'FL') and (item.size == 'FQ') -%}
										Full
									{%- elif (upsellSize == 'QU') and (item.size == 'FQ') -%}
										Queen
									{%- elif (upsellSize == 'KG') and (item.size == 'KC') -%}
										King
									{%- elif (upsellSize == 'CK') and (item.size == 'KC') -%}
										Cal King
									{%- else -%}
										{{- item.sizeName -}}
									{%- endif -%}
								{%- else -%}
									{{- item.sizeName -}}
								}
							</div>
						)}
						{% for item in u.skus -%}
							{%- set active = false -%}
							{%- if u.sku == item.sku -%}
								{%- set active = true -%}
								{# Setting the upsell that corresponds to the cart item as active #}
							{%- endif -%}

							{%- set itemOk = false -%}
							{%- set size = u.sku.slice(9, limit) -%}
							{%- if u.colorSelection -%}
								{%- set activeColor = u.colors[0].id -%}
								{%- for color in u.colors -%}
									{# Only load specified colors #}
									{%- set itemColor = item.sku.slice(6, -3) -%}
									{%- if (itemColor == color.id) -%}
										{%- set itemOk = true -%}
									{%- endif -%}
								{%- endfor -%}
							{%- else -%}
								{%- set itemOk = true -%}
							{%- endif -%}
							{% if itemOk -%}
								
								<div className='current-size' 
										data-sku='{{ item.sku }}'
										data-active='{{ active }}'
										data-color-selection='{{ u.colorSelection }}'
										data-active-color='{{ activeColor }}'
										data-longtitle='{{ dualSizes }}'>
									{%- if dualSizes -%}
										{%- if (upsellSize == 'TW') and (item.size == 'TT') -%}
											Twin
										{%- elif (upsellSize == 'TX') and (item.size == 'TT') -%}
											Twin XL
										{%- elif (upsellSize == 'FL') and (item.size == 'FQ') -%}
											Full
										{%- elif (upsellSize == 'QU') and (item.size == 'FQ') -%}
											Queen
										{%- elif (upsellSize == 'KG') and (item.size == 'KC') -%}
											King
										{%- elif (upsellSize == 'CK') and (item.size == 'KC') -%}
											Cal King
										{%- else -%}
											{{- item.sizeName -}}
										{%- endif -%}
									{%- else -%}
										{{- item.sizeName -}}
									{%- endif -%}
								</div>
							{%- endif %}
						{%- endfor %}	
						{% if u.colorSelection %}
							<div className='current-size selection-message'
								data-active-color='{{ activeColor }}'
								data-active='false'>Select Size</div>
						{%- endif -%}
					</button>
					<ul className='dropdown-menu' aria-labelledby='upsell-LU-{{ u.type -}}-{{- u.color }}' color-selection='{{ u.colorSelection }}'>
						{%- if u.colorSelection -%}
							{%- set colorCount = u.colors | length -%}
							{%- set activeColor = u.colors[0].id -%}
							{%- set activeColorName = u.colors[0].name -%}
							<li className='color-select'>
								<div className='color-label' 
									data-active-color='{{ activeColor }}' 
									data-active-color-name='{{ activeColorName }}'	>
								</div>
								<ul>
									{%- for color in u.colors -%}
										{%- if loop.index == 1 -%}
											{%- set active = true -%}
										{%- else -%}
											{%- set active = false -%}
										{%- endif -%}
										<li data-upsell-colors='{{ colorCount }}' 
										data-color='{{ color.id }}'
										data-color-name='{{ color.name }}'
										data-type='{{ type }}'
										data-active='{{ active }}'
										role='button' tabIndex='0'></li>
									{%- endfor -%}
								</ul>
							</li>
						{%- endif -%}

						<li className='upsell-select'>
							<ul>
								{%- set count = 0 -%}
								{%- set totalUpsellSizes = 6 -%}
								{%- for item in u.skus -%}
									{%- set active = false -%}
									{%- if u.sku == item.sku -%}
										{%- set active = true -%}
									{%- endif -%}

									{%- set itemOk = false -%}
									{%- set size = u.sku.slice(9, limit) -%} {# size of associated cart item #}
									{%- set itemSize = item.sku.slice(9, limit) -%}
									{%- set itemColor = item.sku.slice(6, -3) -%}
									{%- if u.colorSelection -%}
										{%- for color in u.colors -%}
											{# Only load current size and specified colors #}
											{%- if (itemColor == color.id) -%}
												{%- set itemOk = true -%}
											{%- endif -%}
										{%- endfor -%}
									{%- else -%}
										{%- set itemOk = true -%}
									{%- endif -%}
									{%- if itemOk -%}
										{%- set count = count + 1 -%}
										{%- if (count == 1) and (itemSize == 'ST') -%}
											{%- set totalUpsellSizes = 2 -%}
										{%- endif -%}
										{%- if (count == 1) and (itemSize == 'TT') -%}
											{%- set totalUpsellSizes = 3 -%}
										{%- endif -%}

										<li className='upsell-item'
												data-sku='{{ item.sku }}'
												data-type='{{ type }}'
												data-price='{{ item.price }}'
												data-out-of-stock='{{ item.outOfStock }}'
												data-upsell-sizes='{{ totalUpsellSizes }}'
												data-active='{{ active }}'
												{%- if u.colorSelection %}
													data-color-selection='true'
													data-color='{{ itemColor }}'
													{%- if itemColor !== activeColor %}
														style='display: none;'
													{%- endif -%}
												{%- endif -%}
												role='button' tabIndex='0'
												>
												<h5>{{ item.sizeName }}</h5>
												<p>${{ item.price }}</p>
										</li>
									{%- endif -%}
								{%- endfor -%}
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className='add-to-cart col-xs-6'>
				<a className='btn btn-sm btn-dark block' role='button' tabIndex='0'>Add to Cart</a>
			</div> */}
		</div>
	)
}

export default UpsellButtons