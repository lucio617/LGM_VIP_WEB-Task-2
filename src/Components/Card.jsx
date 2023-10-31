

export function Card({first_name,last_name,email,img_src}) {
  return (
    <div>
      <div class="card" style={{width: "18rem" }}>
        <img src={img_src} class="card-img-top" alt="..." />
        <div class="card-body" >
          <h5 class="card-title" >{first_name}  {last_name}</h5>
          <p class="card-text"  style={{ fontSize: '1em' }}>
            Email:{email}
          </p>
          <a href="" class="btn btn-primary">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
