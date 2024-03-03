
export default function ImageGallery({ items }) {
    
    <ul>
        {items.map((item) => (
            <li key={item.id}>
		<div>
		  <img src="" alt="" />
		</div>
	</li>))} 	
</ul>
}