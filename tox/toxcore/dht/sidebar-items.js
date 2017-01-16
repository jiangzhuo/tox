initSidebarItems({"constant":[["BUCKET_DEFAULT_SIZE","Default number of nodes that bucket can hold."],["DHT_PACKET_MIN_SIZE","Minimal size of `DhtPacket` in bytes."],["GET_NODES_SIZE","Size of serialized `GetNodes` in bytes."],["KBUCKET_MAX_ENTRIES","Maximum number of `Bucket`s that `Kbucket` can hold."],["NAT_PING_SIZE","Length in bytes of `NatPing` when serialized into bytes."],["NAT_PING_TYPE","`NatPing type byte; https://zetok.github.io/tox-spec/#nat-ping-request"],["PACKED_NODE_IPV4_SIZE","Size in bytes of serialized `PackedNode` with IPv4."],["PACKED_NODE_IPV6_SIZE","Size in bytes of serialized `PackedNode` with IPv6."],["PING_SIZE","Length in bytes of `Ping` when serialized into bytes."]],"enum":[["DhtPacketT","Types of DHT packets that can be put in `DhtPacket`."],["DhtRequestT","Types of DHT request that can be put in `DhtRequest`."],["IpType","Used by `PackedNode`."],["PingType","Type of `Ping` packet. Either a request or response."]],"fn":[["kbucket_index","Calculate the `k-bucket` index of a PK compared to \"own\" PK."]],"struct":[["Bucket","Structure for holding nodes."],["DhtPacket","Standard DHT packet that encapsulates in the encrypted payload `DhtPacketT`."],["DhtRequest","DHT Request packet structure."],["GetNodes","Request to get address of given DHT PK, or nodes that are closest in DHT to the given PK."],["Kbucket","K-buckets structure to hold up to `KBUCKET_MAX_ENTRIES` * `BUCKET_DEFAULT_SIZE` nodes close to own PK."],["NatPing","NAT Ping; used to see if a friend we are not connected to directly is online and ready to do the hole punching."],["Node","DHT Node and its associated info."],["PackedNode","`PackedNode` format is a way to store the node info in a small yet easy to parse format."],["Ping","Used to request/respond to ping. Use in an encrypted form."],["SendNodes","Response to `GetNodes` request, containing up to `4` nodes closest to the requested node."]],"trait":[["Distance","Trait for functionality related to distance between `PublicKey`s."]]});